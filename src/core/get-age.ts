export const getAge = (date: string): number =>
  Math.abs(
    new Date(Date.now() - new Date(date).getTime()).getUTCFullYear() - 1970,
  )
