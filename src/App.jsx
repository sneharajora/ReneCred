"use client"

import { useState } from "react"
import Header from "./components/Header"
import RFP from "./components/RFP"
import ScientistList from "./components/ScientistList"
import ScientistProfile from "./components/ScientistProfile"
import Invoice from "./components/Invoice"
import Sidebar from "./components/LeftPanel"
const App = () => {
  const [currentView, setCurrentView] = useState("scientist")
  const [selectedScientist, setSelectedScientist] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleScientistClick = (scientist) => {
    setSelectedScientist(scientist)
    setCurrentView("scientist-profile")
  }

  const handleBackToScientistList = () => {
    setCurrentView("scientist")
    setSelectedScientist(null)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p>Dashboard coming soon...</p>
          </div>
        )
      case "rfps":
        return <RFP />
      case "scientist":
        return <ScientistList onScientistClick={handleScientistClick} />
      case "scientist-profile":
        return <ScientistProfile scientist={selectedScientist} onBackToList={handleBackToScientistList} />
      case "invoices":
        return <Invoice />
      case "feed":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Feed</h1>
            <p>Feed content coming soon...</p>
          </div>
        )
      default:
        return <ScientistList />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto">{renderCurrentView()}</main>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}

export default App
