export const getNowDate = (isSafari?: boolean): string => {
  const date = new Date()

  const month =
    date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`

  if (isSafari) {
    return `${date.getDate()}-${month}-${date.getFullYear()}`
  }

  return `${date.getFullYear()}-${month}-${date.getDate()}`
}
