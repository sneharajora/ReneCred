"use client"

import { Search, Bell, Settings, Menu } from "lucide-react"
import Profile1 from "../assets/Profile1.svg"

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm shadow-2xs w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-3 gap-4 lg:gap-0">
        {/* Left: Menu & Search */}
        <div className="flex items-center w-full lg:w-2/3 gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="w-5 h-5" />
          </button>

          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <Search className="w-4 h-4 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-3xl bg-[#EAF1FB] focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Right: Notifications, Settings, Profile */}
        <div className="flex items-center space-x-4 w-full lg:w-auto justify-end">
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
          <Settings className="w-5 h-5 text-gray-600" />
          <div className="flex items-center space-x-2 border border-gray-300 rounded-4xl px-3 py-2">
            <img src={Profile1} alt="Profile" className="w-8 h-8 rounded-full" />
            <div className="text-sm">
              <div className="font-medium">Yogendra Panchal</div>
              <div className="text-[#EE6530]">@ypceo</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
