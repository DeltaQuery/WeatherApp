export const getDayName = (dateString) => {
    const date = new Intl.DateTimeFormat('en-Us', { weekday: 'long' }).format(new Date(dateString))
    return date
  }