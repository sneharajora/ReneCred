import ScientistCard from "./ScientistCard"

const ScientistList = ({ onScientistClick }) => {
  const scientists = Array.from({ length: 12 }).map((_, index) => ({
    id: index,
    name: index === 0 ? "Yogendra Panchal" : `Scientist ${index + 1}`,
    title: "VP Engineering",
    specialization: "EV domain scientist specializing in carbon credit registry and sustainability solutions.",
    email: index === 0 ? "yp@renewcred.com" : `scientist${index + 1}@renewcred.com`,
    phone: index === 0 ? "+918460251074" : `+91${8460251074 + index}`,
    location: "Ahmedabad | Gujarat | India",
    followers: 150,
    rfpsCompleted: "50+",
    image: "/placeholder.svg?height=48&width=48",
  }))

  return (
    <div className="p-6">
      <h1 className="text-2xl font-medium mb-6">Scientists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {scientists.map((scientist) => (
          <ScientistCard key={scientist.id} scientist={scientist} onScientistClick={onScientistClick} />
        ))}
      </div>
    </div>
  )
}

export default ScientistList
