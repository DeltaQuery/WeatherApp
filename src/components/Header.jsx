import React from 'react'
import { HeaderContainer } from '../styles/HeaderStyles'
import { FaSun } from 'react-icons/fa'
import { GiMoon } from "react-icons/gi"

export const Header = ({selectedTheme, setSelectedTheme, light, dark, tempScale, setTempScale}) => {
  const handleTheme = theme => {
    setSelectedTheme(theme)
  }

  const handleTempScale = scale => {
    setTempScale(scale)
  }

  return (
    <HeaderContainer>
        <div className="HeaderContainer--Title">
        Weather App
        </div>
        <div>
        <span className="celsius" onClick={() => handleTempScale("toCelsius")}>Cº</span> / <span className="fahrenheit" onClick={() => handleTempScale("toFah")}>Fº</span>
        </div>
        <div className="HeaderContainer--Mode">
        { selectedTheme.name === "light-theme" && <span onClick={() => handleTheme(dark)} className="HeaderContainer--Mode--ThemeButton">Dark mode <FaSun /></span> }
        { selectedTheme.name === "dark-theme" && <span onClick={() => handleTheme(light)} className="HeaderContainer--Mode--ThemeButton">Light mode <GiMoon /></span> }

        </div>
    </HeaderContainer>
  )
}
