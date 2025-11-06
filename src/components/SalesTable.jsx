import { useMemo } from 'react'

export default function SalesTable({ items }) {
  const total = useMemo(() => items.reduce((s, i) => s + i.qty * i.price, 0), [items])

  return (
    <section className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <p className="font-medium">پسولەی دوا</p>
        <p className="text-sm text-gray-500">كۆی گشتی: <span className="font-semibold text-gray-900">{total.toLocaleString()} دینار</span></p>
      </div>
      <div className="divide-y divide-gray-200">
        {items.map((i, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-3 p-4 items-center">
            <div className="col-span-5 sm:col-span-6">
              <p className="font-medium text-gray-800">{i.name}</p>
              <p className="text-xs text-gray-500">كۆد: {i.sku}</p>
            </div>
            <div className="col-span-2 text-center">{i.qty}</div>
            <div className="col-span-2 text-right">{i.price.toLocaleString()}</div>
            <div className="col-span-3 text-right font-semibold">{(i.qty * i.price).toLocaleString()}</div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="p-6 text-center text-gray-500">هیچ شتەک زیاد نەکراوە</div>
        )}
      </div>
    </section>
  )
}
