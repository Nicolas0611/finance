# React Architecture Reference Guide
> Use this file as a prompt for AI assistants or as an onboarding reference for your team.
> Every decision here was made deliberately — read the "why" before changing anything.

---

## How to use this file as a prompt

Paste the contents into any AI assistant with the following prefix:

```
You are a senior React architect. Use the following architecture guide as the
single source of truth for every code decision, file you create, and suggestion
you make. Do not deviate from these conventions unless explicitly asked.
```

---

## 1. Stack

| Concern | Technology |
|---|---|
| UI | React 18+ with TypeScript (strict mode) |
| Data fetching / server state | TanStack Query v5 |
| HTTP client | Axios (configured instance, never raw fetch) |
| Client state | Zustand (UI state only — never server data) |
| Routing | React Router v6 |
| Forms | React Hook Form + Zod |
| Styling | Tailwind CSS |

---

## 2. Folder Structure

```
src/
├── api/
│   ├── apiClient.ts          # Axios instance with interceptors
│   └── endpoints.ts          # All URL constants — no raw strings anywhere else
│
├── features/                 # One folder per domain (users, orders, billing…)
│   └── [feature]/
│       ├── types/
│       │   ├── dto.ts        # Raw API shapes — never used in components
│       │   └── models.ts     # UI-ready domain models — only these cross into UI
│       ├── mappers/
│       │   └── [feature]Mapper.ts   # DTO → Model and Model → DTO transforms
│       ├── services/
│       │   └── [feature]Service.ts  # Pure async functions, no React
│       ├── hooks/
│       │   ├── index.ts             # Public barrel — only export what consumers need
│       │   ├── queryKeys.ts         # Centralized TanStack Query key definitions
│       │   ├── use[Feature].ts      # Orchestrator hook — composes sub-hooks
│       │   ├── use[Feature]Queries.ts    # All useQuery hooks
│       │   ├── use[Feature]Mutations.ts  # All useMutation hooks
│       │   └── helpers/             # Pure functions used inside hooks (no React)
│       │       └── [concern]Helpers.ts
│       └── components/
│           ├── [Feature]List.tsx    # Presentational
│           └── [Feature]Form.tsx    # Presentational
│
├── components/               # Truly shared, domain-agnostic UI components
│   └── [Component]/
│       ├── index.tsx
│       └── [Component].test.tsx
│
├── hooks/                    # Shared generic hooks (useDebounce, useLocalStorage…)
├── layouts/                  # Route-level layout wrappers
├── pages/                    # Thin route components — delegate to features
├── providers/                # App-level context providers (Auth, Theme…)
├── store/                    # Zustand stores (UI state only)
├── types/                    # Global shared TypeScript types
├── utils/                    # Pure utility functions — no React, no side effects
├── App.tsx
└── main.tsx
```

**Rules:**
- Components import from `@/features/[feature]/hooks` — never from internal sub-paths
- Pages are thin — they compose feature components, own no logic
- `utils/` functions must be pure — if they need React, they belong in `hooks/`

---

## 3. API Client

```typescript
// src/api/apiClient.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { normalizeError } from '../utils/errors';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('access_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      // trigger token refresh or redirect
    }
    return Promise.reject(normalizeError(error));
  }
);

export default apiClient;
```

```typescript
// src/api/endpoints.ts
const V1 = '/v1';

export const ENDPOINTS = {
  users: {
    list:   `${V1}/users`,
    byId:   (id: string) => `${V1}/users/${id}`,
  },
  // add feature groups here
} as const;
```

---

## 4. Type System — Three Layers

### Layer 1 — DTO (raw API shape)
```typescript
// src/features/users/types/dto.ts
// Mirrors exactly what the API returns — snake_case, integer flags, nullable fields
export interface UserDTO {
  user_id:    string;
  full_name:  string;
  email:      string;
  role_code:  1 | 2 | 3;   // 1=admin 2=editor 3=viewer
  is_active:  0 | 1;
  created_at: string;
}

export interface CreateUserPayloadDTO {
  full_name: string;
  email:     string;
  role_code: 1 | 2 | 3;
}
```

### Layer 2 — Domain Model (UI shape)
```typescript
// src/features/users/types/models.ts
// What components and hooks use — clean, typed, computed
export type UserRole = 'admin' | 'editor' | 'viewer';

export interface User {
  id:        string;
  name:      string;
  email:     string;
  role:      UserRole;
  isActive:  boolean;     // never 0 | 1
  createdAt: Date;        // never a raw string
  initials:  string;      // computed in mapper — never in component
}

export interface CreateUserPayload {
  name:  string;
  email: string;
  role:  UserRole;
}
```

### Layer 3 — Mapper (the translation layer)
```typescript
// src/features/users/mappers/userMapper.ts
// Pure functions only — no React, no API calls, no side effects
import type { UserDTO, CreateUserPayloadDTO } from '../types/dto';
import type { User, UserRole, CreateUserPayload } from '../types/models';

const ROLE_MAP: Record<number, UserRole> = { 1: 'admin', 2: 'editor', 3: 'viewer' };
const ROLE_CODE_MAP: Record<UserRole, 1|2|3> = { admin: 1, editor: 2, viewer: 3 };

const getInitials = (name: string) =>
  name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

// DTO → Model (used in every GET service)
export const mapUser = (dto: UserDTO): User => ({
  id:        dto.user_id,
  name:      dto.full_name,
  email:     dto.email,
  role:      ROLE_MAP[dto.role_code] ?? 'viewer',
  isActive:  dto.is_active === 1,
  createdAt: new Date(dto.created_at),
  initials:  getInitials(dto.full_name),
});

export const mapUsers = (dtos: UserDTO[]): User[] => dtos.map(mapUser);

// Model → DTO (used in POST/PUT services)
export const mapCreateUserPayload = (p: CreateUserPayload): CreateUserPayloadDTO => ({
  full_name: p.name,
  email:     p.email,
  role_code: ROLE_CODE_MAP[p.role],
});
```

**Rules:**
- DTOs are never imported in components or hooks — only in services and mappers
- Mappers run once, at the API boundary inside the service
- All formatting (currency, dates, initials) happens in the mapper — never in JSX
- Derived flags (`isExpired`, `canAddSeats`, `isPaid`) are computed in the mapper

---

## 5. Service Layer

```typescript
// src/features/users/services/userService.ts
// Pure async functions — no hooks, no React, no state
import apiClient from '../../../api/apiClient';
import { ENDPOINTS } from '../../../api/endpoints';
import { mapUser, mapUsers, mapCreateUserPayload } from '../mappers/userMapper';
import type { UserDTO } from '../types/dto';
import type { User, CreateUserPayload } from '../types/models';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await apiClient.get<UserDTO[]>(ENDPOINTS.users.list);
  return mapUsers(data);                        // ← mapper runs here, once
};

export const getUserById = async (id: string): Promise<User> => {
  const { data } = await apiClient.get<UserDTO>(ENDPOINTS.users.byId(id));
  return mapUser(data);
};

export const createUser = async (payload: CreateUserPayload): Promise<User> => {
  const dto = mapCreateUserPayload(payload);    // Model → DTO
  const { data } = await apiClient.post<UserDTO>(ENDPOINTS.users.list, dto);
  return mapUser(data);                         // DTO → Model
};

export const deleteUser = async (id: string): Promise<void> => {
  await apiClient.delete(ENDPOINTS.users.byId(id));
};
```

**Rules:**
- Services return typed Domain Models — never raw `AxiosResponse` or DTOs
- No `useState`, no `useEffect`, no imports from React
- One service file per feature

---

## 6. TanStack Query Layer

### Query keys
```typescript
// src/features/users/hooks/queryKeys.ts
export const userKeys = {
  all:   ['users']                             as const,
  byId:  (id: string) => ['users', id]         as const,
  list:  (f: Record<string, unknown>) =>
           ['users', 'list', f]                as const,
};
```

### Queries (reads)
```typescript
// src/features/users/hooks/useUserQueries.ts
import { useQuery } from '@tanstack/react-query';
import { getUsers, getUserById } from '../services/userService';
import { userKeys } from './queryKeys';

export const useUserList = () =>
  useQuery({
    queryKey: userKeys.all,
    queryFn:  getUsers,
    staleTime: 1000 * 60 * 5,
  });

export const useUser = (id: string) =>
  useQuery({
    queryKey: userKeys.byId(id),
    queryFn:  () => getUserById(id),
    enabled:  !!id,
  });
```

### Mutations (writes)
```typescript
// src/features/users/hooks/useUserMutations.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser, deleteUser } from '../services/userService';
import { userKeys } from './queryKeys';

export const useCreateUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      qc.invalidateQueries({ queryKey: userKeys.all });
      qc.setQueryData(userKeys.byId(newUser.id), newUser); // pre-fill detail cache
    },
  });
};

export const useDeleteUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (_, id) => {
      qc.removeQueries({ queryKey: userKeys.byId(id) });
      qc.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};
```

**Cache management rules:**
- `invalidateQueries` → data changed, let TanStack refetch
- `setQueryData` → you already have the new data, inject it directly
- `removeQueries` → only on delete
- Never store server data in Zustand — TanStack Query owns it

### Mutation lifecycle
```
mutate(payload)
  onMutate()    → optimistic update (snapshot old value for rollback)
  [in flight]
  onSuccess()   → update / invalidate cache
  onError()     → roll back optimistic update
  onSettled()   → runs always, final cleanup
```

### `mutate` vs `mutateAsync`
- `mutate` → fire and forget (delete button, toggle)
- `mutateAsync` → when you need to await the result (redirect after create, close modal)

---

## 7. Hook Architecture

### Splitting rules
A hook file should **orchestrate, not implement**. When a hook grows beyond ~80 lines, split it.

```
hooks/
  index.ts                    # public barrel
  queryKeys.ts                # shared cache key constants
  use[Feature].ts             # orchestrator — composes sub-hooks, no logic
  use[Feature]Queries.ts      # all useQuery hooks
  use[Feature]Mutations.ts    # all useMutation hooks
  use[Feature][Concern].ts    # sub-hook per concern (filters, selection, sorting)
  helpers/
    [concern]Helpers.ts       # pure functions used inside hooks
```

### Decision rule for where a function lives

| Can it run without React? | Single concern? | Lives in |
|---|---|---|
| Yes | — | `helpers/` pure function |
| No | Yes | Its own sub-hook file |
| No | No (needs multiple sub-hooks) | Orchestrator |

### Orchestrator pattern
```typescript
// use[Feature].ts — thin composer, zero logic
export const useUsers = () => {
  const { data: users = [], isLoading, error } = useUserList();
  const createMutation = useCreateUser();
  const deleteMutation = useDeleteUser();

  return {
    users,
    isLoading,
    error,
    createUser:  createMutation.mutateAsync,
    deleteUser:  deleteMutation.mutate,
    isCreating:  createMutation.isPending,
    isDeleting:  deleteMutation.isPending,
  };
};
```

### Public barrel
```typescript
// hooks/index.ts — components only import from here
export { useUsers }      from './useUsers';
export { useCreateUser } from './useUserMutations';
```

---

## 8. Component Rules

- **Presentational components** receive everything as props — no data fetching, no business logic
- **Pages** are thin — they compose feature components, own no logic
- Components import from `@/features/[feature]/hooks` — never internal paths
- Use `mutateAsync` when you need to do something after success (close modal, redirect)
- Use `mutate` for simple fire-and-forget actions
- `isLoading` → first load spinner; `isFetching` → subtle background refresh indicator

```tsx
// Correct import
import { useUsers, useCreateUser } from '@/features/users/hooks';

// Wrong — leaks internal structure
import { useUserList } from '@/features/users/hooks/useUserQueries';
```

---

## 9. Design Patterns — When to Use Which

| Pattern | Use when |
|---|---|
| **Custom Hook** | Sharing logic between components — always try this first |
| **Compound Components** | Group of related sub-components sharing state (Tabs, Modal, Select) |
| **Container / Presentational** | Separating data fetching from UI rendering |
| **Provider + Context** | Truly global concerns: auth, theme, locale — NOT server data |
| **HOC** | Wrapping third-party components, router-level auth guards |
| **Render Props** | Library components needing full consumer rendering control |

**HOC vs Render Props in one line:**
- HOC decides what renders — consumer has no control
- Render Props delegates rendering back to the consumer via a function

---

## 10. Error Handling

```typescript
// src/utils/errors.ts
export interface AppError {
  message: string;
  status?: number;
  code?: string;
}

export const normalizeError = (error: unknown): AppError => {
  if (axios.isAxiosError(error)) {
    return {
      message: error.response?.data?.message ?? error.message,
      status:  error.response?.status,
      code:    error.response?.data?.code,
    };
  }
  if (error instanceof Error) return { message: error.message };
  return { message: 'An unexpected error occurred' };
};
```

---

## 11. Global QueryClient Setup

```typescript
// src/main.tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry:               2,
      staleTime:           1000 * 60,
      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
```

---

## 12. Checklist — Adding a New Feature

```
□ Create src/features/[feature]/
□ Define DTO in types/dto.ts
□ Define Domain Model in types/models.ts
□ Write mapper functions in mappers/[feature]Mapper.ts
□ Write service functions in services/[feature]Service.ts
□ Define query keys in hooks/queryKeys.ts
□ Write query hooks in hooks/use[Feature]Queries.ts
□ Write mutation hooks in hooks/use[Feature]Mutations.ts
□ Write orchestrator in hooks/use[Feature].ts
□ Export public API from hooks/index.ts
□ Build presentational components in components/
□ Add a thin page in src/pages/
```

---

## 13. Hard Rules — Never Break These

- Never use `any` — use `unknown` and narrow explicitly
- Never import DTOs in components or hooks — only in services and mappers
- Never store server data in Zustand — TanStack Query owns server state
- Never put formatting logic in JSX — it belongs in the mapper
- Never put raw URL strings in service files — always use `ENDPOINTS`
- Never import from internal hook paths — always use the feature's `hooks/index.ts`
- Never write business logic in a component — extract to a hook or helper
