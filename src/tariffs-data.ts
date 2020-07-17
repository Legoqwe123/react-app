import { CarLiabilityInsuranceProperties } from "./core/index.d"
import { Indexer, TermsMap, CompanyTariff } from "./core"
import { TypeInsuranceEnum } from "./core/enums"
import seatsData from "./seats-data.json"
import voluntaryData from "./voluntary-data.json"
import { formatPrice } from "./core/convert-price"
import { t } from "./i18n/i18n"
import { TRUCKS, CURRENT_YEAR } from "./core/constants"
import { deductibleItems } from "./core/items"

interface AdditionalField {
  carLiability?: boolean
  voluntaryLiabilityInsurance?: string
  personalInsurance?: string
}

// eslint-disable-next-line
const seatsItems: any = seatsData

// eslint-disable-next-line
const voluntaryItems: any = voluntaryData

export const companiesTariffs: CompanyTariff[] = [
  {
    name: "Baoviet Insurance",
    deviationRate: 0.96,
    rating: 4.5,
    image: "baoviet.png",
  },
  {
    name: "PVI Insurance",
    deviationRate: 0.9,
    rating: 4.8,
    image: "pvi.png",
  },
  {
    name: "PTI Insurance",
    deviationRate: 0.88,
    rating: 4.9,
    image: "pti.png",
  },
  {
    name: "PJICO",
    deviationRate: 0.97,
    rating: 4.5,
    image: "pjico.png",
  },
  {
    name: "BaoMinh",
    deviationRate: 0.98,
    rating: 4.5,
    image: "baominh.png",
  },
  {
    name: "BIC",
    deviationRate: 0.92,
    rating: 4,
    image: "bic.png",
  },
  {
    name: "VASS Assurance Corp.",
    deviationRate: 0.97,
    rating: 4.5,
    image: "vass.png",
  },
  {
    name: "VietinBank Insurance",
    deviationRate: 0.98,
    rating: 4.5,
    image: "vietinbank.png",
  },
]

export const companiesWithVoucher: string[] = [
  "VietinBank Insurance",
  "PVI Insurance",
  "PJICO",
]

const getAgeLoad = (year: string): number => {
  const age = CURRENT_YEAR - Number(year)

  switch (true) {
    case age < 3:
      return 1
    case age < 6:
      return 1.1
    case age < 10:
      return 1.2
    case age < 20:
      return 1.3
    case age === 20:
      return 1.4
    default:
      return 1
  }
}

const getBrandLoad = (brand: string): number => {
  if (brand === "MERCEDES-BENZ" || brand === "AUDI") {
    return 1
  }

  if (brand === "TOYOTA" || brand === "HONDA") {
    return 1.2
  }

  return 1.1
}

const getExtendedTermsLoad = (extendedTerms: string[]): number => {
  if (!extendedTerms || extendedTerms.length === 0) {
    return 1
  }

  const termsMap: TermsMap = {
    newPlacements: 0.1,
    theftForParts: 0.1,
    waterDamage: 0.1,
    repairsInBrandedGarage: 0.1,
    specialModification: 0.1,
    territoryVietnam: 0.2,
  }

  return Number(
    extendedTerms
      .reduce(
        (accumulator: number, currentValue: string) =>
          accumulator + termsMap[currentValue],
        1,
      )
      .toFixed(2),
  )
}

const getVoluntaryLiability = ({
  insuranceSum,
  purpose,
  seats,
  tonnage,
  deviationRate,
}: CarLiabilityInsuranceProperties): number => {
  const sum = Number(insuranceSum)

  const { bodilyInjury, propertyDamage } = voluntaryItems[
    purpose
  ].find(
    (element: {
      seats?: number
      tonnage?: string
      propertyDamage: number
      bodilyInjury: number
    }): boolean =>
      purpose === TRUCKS
        ? element.tonnage === tonnage
        : element.seats === seats,
  )

  return (sum * bodilyInjury + sum * propertyDamage) * 0.9 * deviationRate
}

const getPersonalInsurance = (
  insureSum: string,
  participants: number,
  deviationRate: number,
): number => Number(insureSum) * 0.001 * participants * deviationRate

export const getComprehensiveCarTotal = (
  brand: string,
  year: string,
  deviationRate: number,
  extendedTerms: string[],
  // eslint-disable-next-line
  civilLiabilityInsurance: any,
  voluntaryLiabilityInsurance: {
    purpose: string
    seats: string
    tonnage: string
    voluntaryLiabilityCoverage: string
  },
  personalInsurance: {
    personalInsuranceCoverage: string
    numberOfParticipants: string
  },
  price: string,
  deductible: string,
): number => {
  const carValue = parseInt(price.replace(/,/g, ""))
  const ageLoad = getAgeLoad(year)
  const brandLoad = getBrandLoad(brand)
  const extendedTermsLoad = getExtendedTermsLoad(extendedTerms)
  const liabilityInsuranceSum: number = civilLiabilityInsurance.purpose
    ? Math.floor(
        seatsItems[
          civilLiabilityInsurance.purpose.toLowerCase()
        ].find(
          (element: {
            seats?: number
            premium: number
            tonnage?: string
          }): boolean =>
            civilLiabilityInsurance.purpose.toLowerCase() === "trucks"
              ? element.tonnage === civilLiabilityInsurance.tonnage
              : element.seats === parseInt(civilLiabilityInsurance.seats),
        ).premium * deviationRate,
      )
    : 0

  const voluntaryLiabilitySum: number = voluntaryLiabilityInsurance
    ? Math.floor(
        getVoluntaryLiability({
          insuranceSum: voluntaryLiabilityInsurance.voluntaryLiabilityCoverage,
          purpose: voluntaryLiabilityInsurance.purpose.toLowerCase(),
          seats: parseInt(voluntaryLiabilityInsurance.seats),
          tonnage: voluntaryLiabilityInsurance.tonnage,
          deviationRate,
        }),
      )
    : 0

  const personalInsuranceSum: number = personalInsurance
    ? getPersonalInsurance(
        personalInsurance.personalInsuranceCoverage,
        Number(personalInsurance.numberOfParticipants),
        deviationRate,
      )
    : 0

  const deductibleLoad = (
    deductibleItems.find(item => item.id === deductible) || { loading: 1 }
  ).loading

  const total =
    (Math.abs(
      ((0.015 * carValue * ageLoad) / brandLoad) *
        extendedTermsLoad *
        deductibleLoad,
    ) *
      deviationRate +
      liabilityInsuranceSum +
      voluntaryLiabilitySum +
      personalInsuranceSum) *
    0.92

  console.log(
    `Premium (with extended terms load): ${Math.abs(
      ((0.015 * carValue * ageLoad) / brandLoad) *
        extendedTermsLoad *
        deductibleLoad,
    ) * deviationRate}`,
  )
  console.log(`Extended Terms: ${extendedTermsLoad}`)
  console.log(
    `Car Civil Liability Insurance Insurance ${liabilityInsuranceSum}`,
  )
  console.log(`Voluntary Civil Liability Insurance: ${voluntaryLiabilitySum}`)
  console.log(
    `Personal Accident Insurance for Drivers and Passengers: ${personalInsuranceSum}`,
  )

  console.log(`Total sum: ${total}`)

  console.log("")

  return total
}

export const getTariffFields = (
  typeInsurance: TypeInsuranceEnum,
  additionalField?: AdditionalField,
  deductible?: number,
): Indexer => {
  const fields = {}

  if (typeInsurance === TypeInsuranceEnum.LIABILITY) {
    Object.assign(
      fields,
      {
        "tariffCard.propertyDamageLimit": "100,000,000 VND",
        "tariffCard.bodilyInjuryLimit": "100,000,000 VND",
      },
      additionalField?.voluntaryLiabilityInsurance && {
        "tariffCard.voluntaryCivilLiabilityInsurance": t("general.price", {
          0: formatPrice(Number(additionalField.voluntaryLiabilityInsurance)),
        }),
      },
      additionalField?.personalInsurance && {
        "tariffCard.personalAccidentInsurance": t("general.price", {
          0: formatPrice(Number(additionalField?.personalInsurance)),
        }),
      },
    )
  }

  if (typeInsurance === TypeInsuranceEnum.COMPREHENSIVE) {
    Object.assign(
      fields,
      {
        "tariffCard.coverage": "800,000,000 VND",
        "tariffCard.deductible": t("general.price", {
          0: deductible || 0,
        }),
      },
      additionalField?.carLiability && {
        "tariffCard.carLiability": "100,000,000 VND",
      },
      additionalField?.voluntaryLiabilityInsurance && {
        "tariffCard.voluntaryCivilLiabilityInsurance": t("general.price", {
          0: formatPrice(Number(additionalField.voluntaryLiabilityInsurance)),
        }),
      },
      additionalField?.personalInsurance && {
        "tariffCard.personalAccidentInsurance": t("general.price", {
          0: formatPrice(Number(additionalField?.personalInsurance)),
        }),
      },
    )
  }

  if (typeInsurance === TypeInsuranceEnum.HEALTH) {
    return {}
  }

  return fields
}

export const getCarLiabilityTotal = (
  purpose: string,
  seats: string,
  tonnage: string,
  voluntaryLiabilityInsurance:
    | {
        voluntaryLiabilityCoverage: string
      }
    | false,
  personalInsurance: {
    personalInsuranceCoverage: string
    personalNumber: string
  },
  deviationRate: number,
): number => {
  const insuranceSum: number = seatsItems[
    purpose
  ].find(
    (element: { seats?: number; premium: number; tonnage?: string }): boolean =>
      purpose === "trucks"
        ? element.tonnage === tonnage
        : element.seats === parseInt(seats),
  ).premium

  const voluntaryLiabilitySum: number = voluntaryLiabilityInsurance
    ? getVoluntaryLiability({
        insuranceSum: voluntaryLiabilityInsurance.voluntaryLiabilityCoverage,
        purpose,
        seats: parseInt(seats),
        tonnage,
        deviationRate,
      }) * 0.92
    : 0

  const personalInsuranceSum: number = personalInsurance.personalInsuranceCoverage
    ? getPersonalInsurance(
        personalInsurance.personalInsuranceCoverage,
        Number(personalInsurance.personalNumber),
        deviationRate,
      ) * 0.92
    : 0

  console.log(`Insurance Premium: ${insuranceSum}`)
  console.log(`Voluntary Civil Liability Insurance: ${voluntaryLiabilitySum}`)
  console.log(
    `Personal Accident Insurance for Drivers and Passengers: ${personalInsuranceSum}`,
  )
  console.log(
    `Total sum: ${insuranceSum + voluntaryLiabilitySum + personalInsuranceSum}`,
  )
  console.log("")

  return insuranceSum + voluntaryLiabilitySum + personalInsuranceSum
}
