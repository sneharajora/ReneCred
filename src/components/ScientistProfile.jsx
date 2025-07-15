"use client"

import { Mail, Phone, MapPin, Award } from "lucide-react"
import Profile1 from "../assets/Profile1.svg"
import Rec from "../assets/Rectangle 414.svg"

const ScientistProfile = ({ scientist, onBackToList }) => {
  const currentScientist = scientist || {
    name: "Yogendra Panchal",
    title: "VP Engineering",
    email: "yp@renewcred.com",
    phone: "+918460251074",
    location: "Ahmedabad | Gujarat | India",
    followers: 150,
    rfpsCompleted: "50+",
    image: "/placeholder.svg?height=80&width=80",
  }

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="mb-4">
        <nav className="text-sm text-gray-600">
          <button onClick={onBackToList} className="hover:text-red-600">
            Scientists
          </button>
          <span> / </span>
          <span className="text-red-600">{currentScientist.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden relative mb-6">
        {/* Background Image */}
        <div className="relative h-56 w-full">
          <img src={Rec} alt="Rec Background" className="w-full h-full object-cover" />

          {/* Name and Title - Bottom Left */}
          <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
            <h1 className="text-2xl font-bold">{currentScientist.name}</h1>
            <p className="text-md">{currentScientist.title}</p>
          </div>

         

          {/* Profile Image - Half Overlapping */}
          <div className="absolute -bottom-10 right-4">
            <img
              src={Profile1}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>
        </div>

        {/* Content below the image */}
        {/* Content below the image */}
<div className="px-6 pt-12 pb-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Column */}
    <div>
      <p className="text-gray-600 text-sm leading-relaxed">
        EV domain scientist specializing in carbon credit registry and sustainability solutions.
        EV domain scientist specializing in carbon credit registry and sustainability solutions.
        EV domain scientist specializing in carbon credit registry and sustainability solutions.
      </p>
    </div>

    {/* Right Column */}
    <div className="flex flex-col justify-center space-y-3 text-sm text-black-700">
      <div className="flex items-center space-x-2">
          <p className="text-red-600">Email:</p>
        <span>{currentScientist.email}</span>
      </div>
      <div className="flex items-center space-x-2">
                <p className="text-red-600">Phone:</p>

        <span>{currentScientist.phone}</span>
      </div>
      <div className="flex items-center space-x-2">
                  <p className="text-red-600">Location:</p>

        <span>{currentScientist.location}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-red-600">Followers:</span>
        <strong>{currentScientist.followers}</strong>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-red-600">RFPs Completed:</span>
        <strong>{currentScientist.rfpsCompleted}</strong>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Work Experience */}
          <div className="bg-white rounded-lg shadow-sm  p-6">
            <h3 className="text-lg font-semibold mb-6 border-b pb-2">Work Experience</h3>
            <div className="space-y-6">
              {/* Experience 1 */}
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">VP of Engineering</h4>
                    <p className="text-sm text-gray-600">May 2022 - Present | 3 Mos</p>
                    <p className="text-sm text-gray-500">Bengaluru, Karnataka, India</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-red-600 font-medium">RenewCred</span>
                    <span className="text-sm text-gray-500"> | Full-time</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  RenewCred is a carbon credits registry focused on tech-based sustainability solutions.
                  <button className="text-red-600 ml-1 hover:underline">see more</button>
                </p>
              </div>

              {/* Experience 2 */}
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Founder & CEO</h4>
                    <p className="text-sm text-gray-600">April 2018 - April 2024 | 6 Yrs</p>
                    <p className="text-sm text-gray-500">Bengaluru, Karnataka, India</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-red-600 font-medium">Simploons Technosoft LLP</span>
                    <span className="text-sm text-gray-500"> | Full-time</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Simploons Technosoft is a software services company based in Gujarat, India.
                  <button className="text-red-600 ml-1 hover:underline">see more</button>
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg shadow-sm  p-6">
            <h3 className="text-lg font-semibold mb-6 border-b pb-2">Education</h3>
            <div className="space-y-6">
              {/* Degree 1 */}
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Master of Engineering</h4>
                    <p className="text-sm text-gray-600">June 2016 - Mar 2018 | 2 Yrs</p>
                    <p className="text-sm text-gray-500">Ahmedabad, Gujarat, India</p>
                  </div>
                  <span className="text-sm text-red-600 font-medium">IIMA</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  <button className="text-red-600 ml-1 hover:underline">see more</button>
                </p>
              </div>

              {/* Degree 2 */}
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">Bachelor of Engineering</h4>
                    <p className="text-sm text-gray-600">June 2012 - Mar 2016 | 4 Yrs</p>
                    <p className="text-sm text-gray-500">Ahmedabad, Gujarat, India</p>
                  </div>
                  <span className="text-sm text-red-600 font-medium">GIT, Gandhinagar</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  <button className="text-red-600 ml-1 hover:underline">see more</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Research */}
          <div className="bg-white rounded-lg shadow-sm  p-6">
            <h3 className="text-lg font-semibold mb-6 border-b pb-2">Research</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">Heading of published whitepaper</h4>
                  <span className="text-sm text-red-600">21 Sep, 2024</span>
                </div>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  RenewCred is a tech-based carbon credits registry...
                  <button className="text-red-600 ml-1 hover:underline">see more</button>
                </p>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-200">
                  📄 Whitepaper.pdf
                </button>
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div className="bg-white rounded-lg shadow-sm  p-6">
            <h3 className="text-lg font-semibold mb-6 border-b pb-2">Honor & Awards</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">Award 1</h4>
                  <span className="text-sm text-red-600">22 Sep, 2024</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Recognized for excellence in EV sustainability.
                  <button className="text-red-600 ml-1 hover:underline">see more</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScientistProfile
