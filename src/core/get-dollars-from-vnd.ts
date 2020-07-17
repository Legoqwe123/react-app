import { DOLLAR_RATE } from "./constants"

export const getDollarsFromVND = (value: number): string =>
  (value / DOLLAR_RATE).toFixed(2)
