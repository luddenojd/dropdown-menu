import "./App.css"
import arrowDown from "./img/arrow-down.svg"
import arrowUp from "./img/arrow-up.svg"
import {
  CandyBackground,
  CandyDropdown,
  CandyDropMenu,
  CandyListItem,
  DarkDropdown,
  DarkBackground,
  DarkDropMenu,
  DarkListItem,
  GreenDropdown,
  GreenBackground,
  GreenDropMenu,
  GreenListItem,
  HalloweenBackground,
  HalloweenDropdown,
  HalloweenDropMenu,
  HalloweenListItem,
} from "./themes/constant.js"
import { useState, useEffect } from "react"

function App() {
  const [drop, setDrop] = useState(false)
  const [cities, setCities] = useState(null)
  const [showCity, setShowCity] = useState(null)
  const [BackgroundTag, setBackgroundTag] = useState(DarkBackground)
  const [DropdownTag, setDropdownTag] = useState(DarkDropdown)
  const [DropMenuTag, setDropMenuTag] = useState(DarkDropMenu)
  const [ListItemTag, setListItemTag] = useState(DarkListItem)

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

  function greenTheme() {
    setBackgroundTag(GreenBackground)
    setDropdownTag(GreenDropdown)
    setDropMenuTag(GreenDropMenu)
    setListItemTag(GreenListItem)
  }
  function darkTheme() {
    setBackgroundTag(DarkBackground)
    setDropdownTag(DarkDropdown)
    setDropMenuTag(DarkDropMenu)
    setListItemTag(DarkListItem)
  }
  function halloweenTheme() {
    setBackgroundTag(HalloweenBackground)
    setDropdownTag(HalloweenDropdown)
    setDropMenuTag(HalloweenDropMenu)
    setListItemTag(HalloweenListItem)
  }
  function candyTheme() {
    setBackgroundTag(CandyBackground)
    setDropdownTag(CandyDropdown)
    setDropMenuTag(CandyDropMenu)
    setListItemTag(CandyListItem)
  }
  function clearCityAndMenu() {
    setDrop(false)
    setShowCity(null)
  }
  return (
    <BackgroundTag className="App">
      <div className="button-container">
        <button onClick={darkTheme} className="dark-theme">
          <h4>Dark theme</h4>
        </button>
        <button onClick={greenTheme} className="green-theme">
          <h4>Forest theme</h4>
        </button>
        <button onClick={halloweenTheme} className="halloween-theme">
          <h4>Halloween theme</h4>
        </button>
        <button onClick={candyTheme} className="candy-theme">
          <h4>Candy theme</h4>
        </button>
      </div>
      <div className="wrapper">
        <DropdownTag onClick={() => setDrop(true)} className="drop-down">
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
        </DropdownTag>

        {drop !== false ? (
          <DropMenuTag
            onMouseLeave={() => clearCityAndMenu()}
            className="drop-down-menu"
          >
            <ul>
              {" "}
              {cities?.map((city) => (
                <ListItemTag onClick={() => filterById(city.id)} key={city.id}>
                  <h4 className="list-item">{city.name}</h4>
                </ListItemTag>
              ))}
            </ul>
          </DropMenuTag>
        ) : (
          ""
        )}
      </div>
    </BackgroundTag>
  )
}

export default App
