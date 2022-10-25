import "./App.css"
import { useState, useEffect } from "react"

function App() {
  const [drop, setDrop] = useState(false)
  const [cities, setCities] = useState(null)

  useEffect(() => {
    fetch("https://avancera.app/cities/")
      .then((response) => response.json())
      .then((result) => {
        setCities(result)
        console.log(result)
      })
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <div onClick={() => setDrop(true)} className="drop-down">
          <h4>Pick something</h4>
        </div>
        {drop !== false ? (
          <div onMouseLeave={() => setDrop(false)} className="drop-down-menu">
            {cities?.map((city) => (
              <ul>
                <li key={city.id}>{city.name}</li>
              </ul>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default App
