import "./App.css"
import arrowDown from "./img/arrow-down.svg"
import arrowUp from "./img/arrow-up.svg"
import { DarkDropdown, GreenDropdown } from "./themes/constant.js"
import { useState, useEffect } from "react"

function App() {
  const [drop, setDrop] = useState(false)
  const [cities, setCities] = useState(null)
  const [showCity, setShowCity] = useState(null)
  const [style, setStyle] = useState("green")

  useEffect(() => {
    fetch("https://avancera.app/cities/")
      .then((response) => response.json())
      .then((result) => {
        setCities(result)
      })
  }, [])

  function filterById(id) {
    if (cities) {
      const tempName = cities.filter((current) => current.id === id)
      setShowCity(tempName)
    }
  }

  function clearCityAndMenu() {
    setDrop(false)
    setShowCity(null)
  }
  return (
    <div className="App">
      <div className="button-container">
        <button onClick={() => setStyle("dark")} className="dark-theme">
          <h4>Pick theme</h4>
        </button>
        <button>
          <h4>Pick theme</h4>
        </button>
        <button>
          <h4>Pick theme</h4>
        </button>
        <button>
          <h4>Pick theme</h4>
        </button>
      </div>
      <div className="wrapper">
        {style === "green" ? (
          <GreenDropdown onClick={() => setDrop(true)} className="drop-down">
            {showCity !== null ? (
              showCity.map((city) => <h4 key={city.id}>{city.name}</h4>)
            ) : (
              <h4>Pick a city</h4>
            )}

            {drop !== false ? (
              <img src={arrowUp} alt="" />
            ) : (
              <img src={arrowDown} alt="" />
            )}
          </GreenDropdown>
        ) : (
          ""
        )}
        {style === "dark" ? (
          <DarkDropdown onClick={() => setDrop(true)} className="drop-down">
            {showCity !== null ? (
              showCity.map((city) => <h4 key={city.id}>{city.name}</h4>)
            ) : (
              <h4>Pick a city</h4>
            )}

            {drop !== false ? (
              <img src={arrowUp} alt="" />
            ) : (
              <img src={arrowDown} alt="" />
            )}
          </DarkDropdown>
        ) : (
          ""
        )}

        {drop !== false ? (
          <div
            onMouseLeave={() => clearCityAndMenu()}
            className="drop-down-menu"
          >
            <ul>
              {" "}
              {cities?.map((city) => (
                <li onClick={() => filterById(city.id)} key={city.id}>
                  <h4 className="list-item">{city.name}</h4>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default App
