export const formatDate = (value: string): string => {
  const [day, month, year] = value.split("/").map(Number)
  return `${year}-${month >= 10 ? month : `0${month}`}-${day}`
}
