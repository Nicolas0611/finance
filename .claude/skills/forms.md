# Skill: Forms with React Hook Form + Zod

## Always validate with Zod schema first, then connect to RHF

// schema
import { z } from 'zod'

export const createTransactionSchema = z.object({
  amount:     z.number().positive('Amount must be positive'),
  type:       z.enum(['income', 'expense']),
  categoryId: z.string().min(1, 'Category is required'),
  accountId:  z.string().min(1, 'Account is required'),
  date:       z.date(),
  note:       z.string().max(200).optional(),
})

export type CreateTransactionForm = z.infer<typeof createTransactionSchema>

// component
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const form = useForm<CreateTransactionForm>({
  resolver: zodResolver(createTransactionSchema),
  defaultValues: { type: 'expense', date: new Date() },
})

## Never use HTML form submit — always use RHF handleSubmit
const onSubmit = form.handleSubmit(async (data) => {
  await mutateAsync(data)
  form.reset()
  onSuccess?.()
})

## Error display pattern
{form.formState.errors.amount && (
  <p className="text-error text-preset-6 mt-1">
    {form.formState.errors.amount.message}
  </p>
)}

## Field registration
<input
  {...form.register('note')}
  className={cn(
    'w-full border rounded-md px-3 py-2 text-preset-6',
    'border-border focus:border-accent outline-none',
    form.formState.errors.note && 'border-error'
  )}
/>