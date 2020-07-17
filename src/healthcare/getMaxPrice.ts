import healthTariffData from "./health-tariff-data.json"
import { BENEFITS_EN, TOTAL_COVERAGE } from "../core/constants"

interface Item {
  [key: string]: any
}

export const getMaxTotalCoverage = (): number => {
  let maxPrice = 0

  healthTariffData.forEach((company: Item): void => {
    company.packages.forEach((tariff: Item): void => {
      if (tariff[BENEFITS_EN][TOTAL_COVERAGE] > maxPrice) {
        maxPrice = tariff[BENEFITS_EN][TOTAL_COVERAGE]
      }
    })
  })

  return maxPrice / 1000000
}
