import { Settings, Store, Bell } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center text-white font-bold">
            S
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">Smart Salon POS</p>
            <p className="text-xs text-gray-500">کاشێری زیرەك بۆ دووكانی سالۆن</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-rose-500 rounded-full" />
          </button>
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium">
            <Settings className="h-4 w-4" />
            <span>ڕێكخستن</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-black text-sm font-medium">
            <Store className="h-4 w-4" />
            <span>دووکان</span>
          </button>
        </div>
      </div>
    </header>
  )
}
