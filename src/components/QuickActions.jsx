import { Plus, Scissors, UserPlus, Receipt, CalendarDays } from 'lucide-react'

export default function QuickActions({ onNewSale }) {
  const actions = [
    { icon: <Plus className="h-5 w-5" />, label: 'فرۆشتنی نوێ', onClick: onNewSale, color: 'from-emerald-500 to-teal-500' },
    { icon: <Scissors className="h-5 w-5" />, label: 'خزمەتگوزاری نوێ', onClick: () => {}, color: 'from-indigo-500 to-blue-500' },
    { icon: <UserPlus className="h-5 w-5" />, label: 'كڕیار نوێ', onClick: () => {}, color: 'from-fuchsia-500 to-pink-500' },
    { icon: <CalendarDays className="h-5 w-5" />, label: 'نوبت', onClick: () => {}, color: 'from-amber-500 to-orange-500' },
    { icon: <Receipt className="h-5 w-5" />, label: 'پسولە', onClick: () => {}, color: 'from-sky-500 to-cyan-500' },
  ]

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {actions.map((a) => (
        <button
          key={a.label}
          onClick={a.onClick}
          className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${a.color} opacity-10 group-hover:opacity-20`} />
          <div className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl grid place-items-center bg-gray-100 text-gray-700">
              {a.icon}
            </div>
            <span className="font-medium text-gray-800">{a.label}</span>
          </div>
        </button>
      ))}
    </section>
  )
}
