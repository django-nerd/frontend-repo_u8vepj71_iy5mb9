import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import QuickActions from './components/QuickActions'
import SalesOverview from './components/SalesOverview'
import SalesTable from './components/SalesTable'

function App() {
  const [items, setItems] = useState([
    { sku: 'SRV-001', name: 'کێشوه‌ستنی موو', qty: 1, price: 15000 },
    { sku: 'PRD-220', name: 'شامپوۆ پڕۆفیشنال', qty: 2, price: 8000 },
  ])

  const stats = useMemo(() => ({
    today: '95,000 دینار',
    month: '2,540,000 دینار',
    debt: '315,000 دینار',
  }), [])

  const handleNewSale = () => {
    setItems((prev) => [
      ...prev,
      { sku: `PRD-${String(prev.length + 1).padStart(3, '0')}` , name: 'مەحصولی هەواڵ', qty: 1, price: 5000 }
    ])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-indigo-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            <h2 className="text-xl font-semibold tracking-tight">چالاکی خێرا</h2>
            <QuickActions onNewSale={handleNewSale} />

            <h2 className="text-xl font-semibold tracking-tight">کورتەی فرۆش</h2>
            <SalesOverview stats={stats} />
          </div>

          <div className="w-full lg:w-[38%] space-y-6">
            <SalesTable items={items} />
            <div className="rounded-2xl border border-dashed border-gray-300 p-6 text-center text-gray-500">
              بەستەری سیستەمی باکەند بەم زووترەی دەخرێتەوە بۆ هەموو کارەکان
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Smart Salon POS</footer>
    </div>
  )
}

export default App
