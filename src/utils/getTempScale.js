import { roundNumber } from "./roundNumber"

export const getTempScale = (value, option = false, chart = false) => {

    if((option === "toCelsius" || option === false) && chart === false) return `${roundNumber(value - 273.15)}ºC`
    if((option === "toCelsius" || option === false) && chart === true) return roundNumber(value - 273.15)

    if((option === "toFah" || option === false) && chart === false) return `${roundNumber((value - 273.15) * 1.8 + 32)}ºF`
    if((option === "toFah" || option === false) && chart === true) return roundNumber((value - 273.15) * 1.8 + 32)

    return roundNumber(value) + "ºC"
}