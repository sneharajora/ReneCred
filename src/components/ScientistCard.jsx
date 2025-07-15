"use client"

import { Eye, Award } from "lucide-react"
import Profile1 from "../assets/Profile1.svg"
import Badge from "../assets/badge.svg"
import Vector from "../assets/Vector 32.svg"
const ScientistCard = ({ scientist, onScientistClick }) => {
  return (
    <div
      className="bg-white rounded-lg border-1  border-gray-300 p-4 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => onScientistClick(scientist)}
    >
      <div className="flex items-start space-x-3 mb-3">
        <img src={Profile1} alt="Scientist" className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{scientist.name}</h3>
          <p className="text-sm text-gray-600">{scientist.title}</p>
          <div className="flex items-center mt-1">
            <span className="text-xs text-gray-500"><img src={Vector} alt='vector'></img></span>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onScientistClick(scientist)
          }}
          className="text-gray-400 hover:text-gray-600"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-3">{scientist.specialization}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">DAC</span>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">CCUS</span>
        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">BECCS</span>
      </div>

      <div className="flex items-center  justify-between">
  <div className="flex items-center gap-2  p-4 bg-pink-100 rounded-3xl ">
    <h1 className="text-red-600 text-sm  font-medium">Badges</h1>
    <img classNam="w-[40px] h-[50px]  " src={Badge} alt="badge" />
  </div>
</div>


    </div>
  )
}

export default ScientistCard
