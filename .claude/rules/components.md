# .claude/rules/components.md

## Component export convention
Every component uses `export default` — never named exports for components.
No `index.ts` per component folder.
One `index.ts` per main folder that barrel-exports all components.

## Component file pattern
```tsx
// TransactionCard/TransactionCard.tsx
const TransactionCard = ({ transaction }: TransactionCardProps) => {
  return (
    <div className={cls.root}>
      {transaction.name}
    </div>
  )
}

export default TransactionCard
```

## Folder structure — each component in its own folder

```
src/features/transactions/components/
├── TransactionCard/
│   ├── TransactionCard.tsx        ← export default, main component
│   └── TransactionCard.styles.ts  ← internal, never exported
├── TransactionList/
│   ├── TransactionList.tsx        ← export default
│   └── TransactionList.styles.ts
├── TransactionForm/
│   ├── TransactionForm.tsx        ← export default
│   └── TransactionForm.styles.ts
└── index.ts                       ← single barrel, reads from each subfolder
```

```
src/components/
├── Button/
│   ├── Button.tsx
│   └── Button.styles.ts
├── Avatar/
│   ├── Avatar.tsx
│   └── Avatar.styles.ts
├── Badge/
│   ├── Badge.tsx
│   └── Badge.styles.ts
└── index.ts                       ← single barrel for all shared components
```

## Barrel index — reads from each component subfolder

```ts
// src/features/transactions/components/index.ts
export { default as TransactionCard } from './TransactionCard/TransactionCard'
export { default as TransactionList } from './TransactionList/TransactionList'
export { default as TransactionForm } from './TransactionForm/TransactionForm'
```

```ts
// src/components/index.ts
export { default as Button } from './Button/Button'
export { default as Avatar } from './Avatar/Avatar'
export { default as Badge } from './Badge/Badge'
```

## How consumers import
```tsx
// From a feature's components — always from the barrel
import { TransactionCard, TransactionList } from '@/features/transactions/components'

// From shared components — always from the barrel
import { Button, Avatar, Badge } from '@/components'
```

## Folder structure — where index.ts lives
```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.styles.ts
│   ├── Avatar/
│   │   ├── Avatar.tsx
│   │   └── Avatar.styles.ts
│   └── index.ts                    ✅ one barrel here only
│
├── pages/
│   ├── DashboardPage/
│   │   └── DashboardPage.tsx
│   ├── LoginPage/
│   │   └── LoginPage.tsx
│   └── index.ts                    ✅ one barrel here only
│
└── features/
    └── transactions/
        ├── components/
        │   ├── TransactionCard/
        │   │   ├── TransactionCard.tsx
        │   │   └── TransactionCard.styles.ts
        │   └── index.ts             ✅ one barrel here only
        └── hooks/
            └── index.ts             ✅ one barrel here only
```

## Rules
- Before creating a new component verify under the `index.ts` that the component is not repeated or already exists.
- Every component lives in its own folder named exactly after the component
- The component file inside the folder is named exactly after the folder
- Every component file uses `export default ComponentName` — never named export
- No `index.ts` inside individual component folders — ever
- One `index.ts` per main folder — reads from each component subfolder
- The barrel re-exports using `export { default as Name } from './Name/Name'`
- `.styles.ts` files are never exported from the barrel — internal only
- When a new component is created, register it in the folder's `index.ts` immediately

## What NOT to do
```
// ❌ No index.ts inside a component folder
src/components/Button/
├── Button.tsx
├── Button.styles.ts
└── index.ts             ← never do this

// ❌ No named exports for components
export const TransactionCard = () => { ... }

// ❌ No deep imports bypassing the barrel
import TransactionCard from '@/features/transactions/components/TransactionCard/TransactionCard'

// ✅ Always from the barrel
import { TransactionCard } from '@/features/transactions/components'
```