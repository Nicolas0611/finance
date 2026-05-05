const METRIC_CARDS = [
  { label: 'Total Balance',  value: '$24,531.00' },
  { label: 'Income (MTD)',   value: '$6,200.00'  },
  { label: 'Expenses (MTD)', value: '$2,840.00'  },
]

const DashboardPage = () => (
  <div className="p-8">
    <h1 className="text-preset-2 font-bold text-foreground mb-2">Dashboard</h1>
    <p className="text-preset-6 text-secondary">Welcome to your finance dashboard.</p>
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {METRIC_CARDS.map((card) => (
        <div key={card.label} className="rounded-xl border border-border bg-surface p-6">
          <p className="text-preset-6 text-secondary">{card.label}</p>
          <p className="text-preset-4 font-bold text-foreground mt-1">{card.value}</p>
        </div>
      ))}
    </div>
  </div>
)

export default DashboardPage
