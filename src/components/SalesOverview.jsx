import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function SalesOverview({ stats }) {
  const cards = [
    {
      title: 'فرۆش الئێوه',
      value: stats.today,
      change: '+12%',
      trend: 'up',
    },
    {
      title: 'مانگەکە',
      value: stats.month,
      change: '+4%',
      trend: 'up',
    },
    {
      title: 'قەرزی كڕیاران',
      value: stats.debt,
      change: '-2%',
      trend: 'down',
    },
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((c) => (
        <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{c.title}</p>
            {c.trend === 'up' ? (
              <ArrowUpRight className="h-5 w-5 text-emerald-600" />
            ) : (
              <ArrowDownRight className="h-5 w-5 text-rose-600" />
            )}
          </div>
          <p className="text-2xl font-semibold tracking-tight">{c.value}</p>
          <p className={`text-sm ${c.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>{c.change} لە هەفتەی ڕابردو</p>
        </div>
      ))}
    </section>
  )
}
