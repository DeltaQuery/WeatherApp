import { useEffect, useState } from 'react'
import { CurrentDay } from './components/CurrentDay'
import { ForecastList } from './components/ForecastList'
import { getDayName } from './utils/getDayName'
import { getHumanDate } from './utils/getHumanDate'
import { getTempScale } from './utils/getTempScale'
import { DataAndSearch } from './components/DataAndSearch'
import { getHumanMinutes } from './utils/getHumanMinutes'
import { Header } from './components/Header'
import "./App.css"
import { ThemeProvider } from 'styled-components'
import {
  light,
  dark,
} from "./styles/Theme.styled"
import { Global } from './styles/Global'
import { AppContainer } from './styles/AppContainer'
import { Footer } from './components/Footer'
import { GetGeolocation } from './services/getGeolocation'

function App() {
  const [tempScale, setTempScale] = useState("toCelsius")
  const [selectedTheme, setSelectedTheme] = useState(light)
  const [weather, setWeather] = useState()
  const [day, setDay] = useState()
  const [location, setLocation] = useState()
  const [coords, setCoords] = useState()
  const currentDay = getDayName(new Date())
  const currentDate = new Date().toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })
  const currentTime = new Date().getHours() + ":" + getHumanMinutes(new Date())
  GetGeolocation({setCoords, setLocation, setWeather})

  useEffect(() => {
    setDay(getDayName(new Date()))
  }, [])

  return (
    <ThemeProvider theme={selectedTheme}>
      <Global />
      <AppContainer>

        {weather &&
          <>
            <Header
              setSelectedTheme={setSelectedTheme}
              selectedTheme={selectedTheme}
              tempScale={tempScale}
              setTempScale={setTempScale}
              light={light}
              dark={dark}
            />
            <div className="App">

              <DataAndSearch
                currentTime={currentTime}
                currentDate={currentDay + ", " + currentDate}
                location={location}
                setLocation={setLocation}
                setCoords={setCoords}
                setWeather={setWeather}
              />

              <h1 style={{ marginBottom: "1rem" }}>Current Day</h1>

                  <CurrentDay
                    day={day}
                    weather={weather[0].data.weather[0].main}
                    temperature={getTempScale(weather[0].data.main.temp, tempScale)}
                    feelsLike={getTempScale(weather[0].data.main.feels_like, tempScale, false)}
                    humidity={weather[0].data.main.humidity}
                    wind={weather[0].data.wind.speed}
                    windDegree={weather[0].data.wind.deg}
                    sunrise={getHumanDate(weather[0].data.sys.sunrise)}
                    sunset={getHumanDate(weather[0].data.sys.sunset)}
                    coords={coords}
                    weatherArr={weather[1]}
                    chartColors={selectedTheme.colors}
                    tempScale={tempScale}
                  />

                <ForecastList
                  forecast={weather[1].data}
                  tempScale={tempScale}
                />
            </div>
            <Footer />
          </>
        }

      </AppContainer>
    </ThemeProvider>
  )
}

export default App
