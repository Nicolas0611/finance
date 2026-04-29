# Skill: Writing Mappers

## Purpose
Mappers run once at the API boundary inside the service.
After the mapper, the rest of the app only ever sees clean Domain Models.

## Rules
- Pure functions only — no React, no API calls, no side effects
- Always provide safe fallbacks for null/undefined fields
- Format ALL display values here — currency, dates, percentages
- Compute ALL derived flags here — isExpense, isOverBudget, isCompleted
- Never called from hooks or components — only from service functions

## Finance mapper example

// transactionMapper.ts
import type { TransactionDTO } from '../types/dto'
import type { Transaction, TransactionType } from '../types/models'

const TYPE_MAP: Record<number, TransactionType> = {
  1: 'income',
  2: 'expense',
}

const formatCurrency = (cents: number, currency = 'USD') =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100)

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date)

export const mapTransaction = (dto: TransactionDTO): Transaction => {
  const type = TYPE_MAP[dto.type_code] ?? 'expense'
  const date = new Date(dto.transaction_date)

  return {
    id:             dto.transaction_id,
    amount:         dto.amount_cents,               // raw cents — for math
    displayAmount:  formatCurrency(dto.amount_cents), // formatted — for display
    type,
    isExpense:      type === 'expense',              // derived flag
    date,
    displayDate:    formatDate(date),                // formatted — for display
    categoryId:     dto.category_id,
    accountId:      dto.account_id,
    note:           dto.note ?? '',                  // safe fallback
  }
}

export const mapTransactions = (dtos: TransactionDTO[]): Transaction[] =>
  dtos.map(mapTransaction)

## Reverse mapper (Model → DTO for write operations)

export const mapCreateTransactionPayload = (
  p: CreateTransactionPayload
): CreateTransactionPayloadDTO => ({
  amount_cents:      Math.round(p.amount),         // already cents
  type_code:         p.type === 'income' ? 1 : 2,
  transaction_date:  p.date.toISOString(),
  category_id:       p.categoryId,
  account_id:        p.accountId,
  note:              p.note,
})

## Budget mapper example (computed fields)

export const mapBudget = (dto: BudgetDTO): Budget => {
  const usedAmount      = dto.used_cents / 100
  const targetAmount    = dto.limit_cents / 100
  const remainingAmount = targetAmount - usedAmount
  const percentageUsed  = Math.min(Math.round((usedAmount / targetAmount) * 100), 100)

  const status =
    percentageUsed >= 90 ? 'danger' :
    percentageUsed >= 70 ? 'warning' : 'safe'

  return {
    id:               dto.budget_id,
    categoryId:       dto.category_id,
    usedAmount,
    targetAmount,
    remainingAmount,
    percentageUsed,
    status,                                         // 'safe' | 'warning' | 'danger'
    displayUsed:      formatCurrency(dto.used_cents),
    displayTarget:    formatCurrency(dto.limit_cents),
    displayRemaining: formatCurrency(dto.remaining_cents),
  }
}