import { HealthTariff } from "../core"
import healthData from "./health-tariff-data.json"
import { formatPrice } from "../core/convert-price"
import { t } from "../i18n/i18n"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const healthTariffs: any = healthData

interface PackageTypes {
  name_vi: string
  name_en: string
  benefits_en: {
    [key: string]: number
  }
  benefits_vi: {
    [key: string]: number
  }
  prices: {
    [key: string]: number
  }
}

interface HealthCompanyData {
  company: string
  packages: PackageTypes[]
}

interface Companies {
  [name: string]: {
    rating: number
    image: string
  }
}

const companies: Companies = {
  "PTI Insurance": {
    rating: 4.9,
    image: "pti.png",
  },
  "VietinBank Insurance": {
    rating: 4.5,
    image: "vietinbank.png",
  },
  "Bao Long Insurance": {
    rating: 4.6,
    image: "baolong.png",
  },
  "Baoviet Insurance": {
    rating: 4.5,
    image: "baoviet.png",
  },
}

export const getHealthFields = (benefits: {
  [key: string]: number
}): { [key: string]: string } => {
  const fields: { [key: string]: string } = {}

  Object.keys(benefits).forEach((key: string): void => {
    fields[key] = t("general.price", {
      0: formatPrice(benefits[key] as number),
    })
  })

  return fields
}

export const getHealthTariffs = (
  age: number,
  minCoverage: number,
  maxCoverage: number,
): HealthTariff[] | [] => {
  const tariffs: HealthTariff[] = []

  healthTariffs.forEach((company: HealthCompanyData): void => {
    company.packages.forEach((element: PackageTypes): void => {
      if (
        element.benefits_en["Total coverage"] > maxCoverage * 1000000 ||
        element.benefits_en["Total coverage"] < minCoverage * 1000000
      ) {
        return
      }
      let price = 0
      let years = ""

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(element.prices).forEach(([key, value]: any[]): void => {
        if (
          Number(key.split("-")[0]) <= age &&
          Number(key.split("-")[1]) >= age
        ) {
          price = value
          years = key
        }
      })

      const tariff: HealthTariff = {
        company: company.company,
        image: companies[company.company].image,
        rating: companies[company.company].rating,
        nameVI: element.name_vi,
        nameEN: element.name_en,
        benefitsEN: element.benefits_en,
        benefitsVI: element.benefits_vi,
        price,
        years,
      }

      tariffs.push(tariff)
    })
  })

  return tariffs
}
