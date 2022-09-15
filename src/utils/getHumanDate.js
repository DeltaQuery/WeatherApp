import { getHumanMinutes } from "./getHumanMinutes"

export const getHumanDate = unix => {
    const unixDate = new Date(unix *1000)
    const humanDateFormat = new Date(unixDate.toUTCString())
    const hoursAndMinutes = humanDateFormat.getHours() + ':' + getHumanMinutes(humanDateFormat)
    return hoursAndMinutes  
}