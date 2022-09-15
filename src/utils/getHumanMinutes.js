export const getHumanMinutes = minutes => {
    const humanMinutes = minutes.getMinutes()
    if(humanMinutes === 0) return "00"
    if(humanMinutes === 1) return "01"
    if(humanMinutes === 2) return "02"
    if(humanMinutes === 3) return "03"
    if(humanMinutes === 4) return "04"
    if(humanMinutes === 5) return "05"
    if(humanMinutes === 6) return "06"
    if(humanMinutes === 7) return "07"
    if(humanMinutes === 8) return "08"
    if(humanMinutes === 9) return "09"
    return humanMinutes
}