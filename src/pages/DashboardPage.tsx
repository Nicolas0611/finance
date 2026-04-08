export const DashboardPage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
    <p className="text-gray-500">Welcome to your finance dashboard.</p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { label: 'Total Balance', value: '$24,531.00' },
        { label: 'Income (MTD)',  value: '$6,200.00'  },
        { label: 'Expenses (MTD)', value: '$2,840.00' },
      ].map((card) => (
        <div key={card.label} className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">{card.label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
        </div>
      ))}
    </div>
  </div>
);
