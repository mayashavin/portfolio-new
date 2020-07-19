const format = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
})

const formatTime = time => {
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year }
  ] = format.formatToParts(time)

  return {
    day,
    month,
    year
  }
}

export default formatTime
