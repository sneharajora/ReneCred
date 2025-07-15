"use client"

import Logo from "../assets/Logo _ RenewCred.svg"
import Edit from "../assets/edit.svg"
import Chat from '../assets/chat.svg'
import Dash from "../assets/dashboard-panel 1.svg"
import Feed from "../assets/Feed.svg"
import Rfp from "../assets/features.svg"
import Scientist from "../assets/Scientist.svg"
import Invoices from "../assets/audit.svg"
import Mail from "../assets/mail.svg"
import Chats from "../assets/chat.svg"
import Sheet from "../assets/Googlesheet.svg"
import Doc from "../assets/docs.svg"

const Sidebar = ({ currentView, setCurrentView, sidebarOpen, setSidebarOpen }) => {
  const navigation = [
    { name: "Dashboard", id: "dashboard", icon: Dash },
    { name: "Feed", id: "feed", icon: Feed },
    { name: "RFPs", id: "rfps", icon: Rfp },
    { name: "Scientist", id: "scientist", icon: Scientist },
    { name: "Invoices", id: "invoices", icon: Invoices },
  ]

  const sidebarApps = [
    { name: "Gmail", id: "gmail", icon: Mail, onClick: () => window.open("https://mail.google.com", "_blank") },
    { name: "Chat", id: "chat", icon: Chats, onClick: () => window.open("https://chat.google.com", "_blank") },
    { name: "Doc", id: "doc", icon: Doc, onClick: () => window.open("https://docs.google.com", "_blank") },
    { name: "Sheet", id: "sheet", icon: Sheet, onClick: () => window.open("https://sheets.google.com", "_blank") },
  ]

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      {/* Top Logo */}
      <div className="flex items-center justify-between h-16 bg-white shadow-2xs px-4">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="logo" className="h-8" />
        </div>
        <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 rounded-md hover:bg-pink-100">
          ✕
        </button>
      </div>

      {/* Create Button */}
      <div className="p-4">
        <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-700">
          <img src={Edit} alt="edit" className="h-4 w-4" />
          <span>Create</span>
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="mt-4">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentView(item.id)
              setSidebarOpen(false)
            }}
            className={`w-full flex items-center px-4 py-3 text-left hover:bg-pink-100 ${
              currentView === item.id ? "bg-gray-100 border-r-2 border-red-600" : ""
            }`}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5 mr-3" />
            <span className="text-black-700">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Sidebar Apps Styled Like Nav Items */}
      <div className="mt-8">
        {sidebarApps.map((app) => (
          <button
            key={app.id}
            onClick={app.onClick}
            className="w-full flex items-center px-4 py-3 text-left hover:bg-pink-100"
          >
            <img src={app.icon} alt={app.name} className="w-5 h-5 mr-3" />
            <span className="text-black-700">{app.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
