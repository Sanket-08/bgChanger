import { useState } from "react"


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("#fcf5c7")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#fcf5c7"}}
          >Lemon Chiffon</button>
          <button
          onClick={() => setColor("#cdb4db")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#cdb4db"}}
          >Uranian Blue</button>
          <button
          onClick={() => setColor("#ffc8dd")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#ffc8dd"}}
          >Orchid Pink </button>
           <button
          onClick={() => setColor("#79addc")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#79addc"}}
          >Iceberg</button>
           <button
          onClick={() => setColor("#efcfe3")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#efcfe3"}}
          >Lavender </button>
           <button
          onClick={() => setColor("#eaf2d7")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#eaf2d7"}}
          >Pista </button>
        </div>
      </div>
    </div>
  )
}

export default App