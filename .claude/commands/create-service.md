# Command: create-service

## Trigger
"create service [name]"
"scaffold service [name]"
"add service for [name]"

## Steps — execute in this exact order

### 1. Clarify (ask only if not provided)
- What feature does this service belong to?
- What does the API response look like? (field names and types)
- What operations are needed?
  - [ ] getAll
  - [ ] getById
  - [ ] create
  - [ ] update
  - [ ] delete

### 2. Generate files in order

#### 2a. types/dto.ts
- snake_case field names — exactly as the API returns them
- Integer flags for booleans (0 | 1)
- Raw ISO strings for dates — never Date objects
- Nullable fields as Type | null
- One interface per operation (ResponseDTO, CreatePayloadDTO, UpdatePayloadDTO)

```ts
// src/features/[name]/types/dto.ts
export interface [Name]DTO {
  [name]_id:  string
  // ... raw API fields
}

export interface Create[Name]PayloadDTO {
  // ... fields the API expects on POST
}

export interface Update[Name]PayloadDTO {
  // ... fields the API expects on PUT
}
```

#### 2b. types/models.ts
- camelCase field names
- Booleans as boolean — never 0 | 1
- Dates as Date objects — never strings
- Derived/computed fields included (isExpense, displayAmount, status…)
- Payload types using Pick/Partial from the domain model

```ts
// src/features/[name]/types/models.ts
export interface [Name] {
  id:    string
  // ... clean UI-ready fields
  // ... computed fields
}

export type Create[Name]Payload = {
  // ... what the form submits
}

export type Update[Name]Payload = Partial<Pick<[Name], 'field1' | 'field2'>>
```

#### 2c. mappers/[name]Mapper.ts
Follow @skills/mapper.md exactly:
- mapDto() → Model (used in GET operations)
- mapDtos() → Model[] (used in list endpoints)
- mapCreatePayload() → CreatePayloadDTO (used in POST)
- mapUpdatePayload() → UpdatePayloadDTO (used in PUT)
- All formatting here — currency, dates, percentages
- All derived flags here — isExpense, status, isCompleted

#### 2d. services/[name]Service.ts
- Pure async functions — no React, no hooks, no state
- Import only from apiClient and ENDPOINTS
- Every GET function calls mapper before returning
- Every POST/PUT maps payload before sending, maps response before returning
- Return typed Domain Models — never AxiosResponse or DTOs

```ts
// src/features/[name]/services/[name]Service.ts
import apiClient from '@/api/apiClient'
import { ENDPOINTS } from '@/api/endpoints'
import {
  map[Name],
  map[Name]s,
  mapCreate[Name]Payload,
  mapUpdate[Name]Payload,
} from '../mappers/[name]Mapper'
import type { [Name]DTO } from '../types/dto'
import type { [Name], Create[Name]Payload, Update[Name]Payload } from '../types/models'

export const get[Name]s = async (): Promise<[Name][]> => {
  const { data } = await apiClient.get<[Name]DTO[]>(ENDPOINTS.[name].list)
  return map[Name]s(data)
}

export const get[Name]ById = async (id: string): Promise<[Name]> => {
  const { data } = await apiClient.get<[Name]DTO>(ENDPOINTS.[name].byId(id))
  return map[Name](data)
}

export const create[Name] = async (payload: Create[Name]Payload): Promise<[Name]> => {
  const dto = mapCreate[Name]Payload(payload)
  const { data } = await apiClient.post<[Name]DTO>(ENDPOINTS.[name].list, dto)
  return map[Name](data)
}

export const update[Name] = async (
  id: string,
  payload: Update[Name]Payload
): Promise<[Name]> => {
  const dto = mapUpdate[Name]Payload(payload)
  const { data } = await apiClient.put<[Name]DTO>(ENDPOINTS.[name].byId(id), dto)
  return map[Name](data)
}

export const delete[Name] = async (id: string): Promise<void> => {
  await apiClient.delete(ENDPOINTS.[name].byId(id))
}
```

#### 2e. Add to endpoints.ts
Add the new feature endpoints to src/api/endpoints.ts:

```ts
[name]: {
  list:   `${V1}/[name]s`,
  byId:   (id: string) => `${V1}/[name]s/${id}`,
},
```

### 3. Run review automatically
After generation run @commands/review.md on every file.
Fix all violations before presenting output.

### 4. Output summary
- Files created (list with paths)
- Endpoints added to endpoints.ts
- Next steps: run create-feature to add hooks and components
- Any assumptions made about the API shape