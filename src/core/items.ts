import { t } from "../i18n/i18n"
import seatsData from "../seats-data.json"
import { Indexer, SelectItem } from "."

export const purposeItems = [
  {
    id: "personal",
    name: t("carLiability.personal"),
    value: t("carLiability.personal"),
  },
  {
    id: "pickup",
    name: t("carLiability.pickup"),
    value: t("carLiability.pickup"),
  },
  {
    id: "taxi",
    name: t("carLiability.taxi"),
    value: t("carLiability.taxi"),
  },
  {
    id: "commercial",
    name: t("carLiability.commercial"),
    value: t("carLiability.commercial"),
  },
  {
    id: "trucks",
    name: t("carLiability.trucks"),
    value: t("carLiability.trucks"),
  },
]

export const getSeatsItems = (purpose: string): SelectItem[] => {
  const seats: any = seatsData

  return seats[purpose].map(
    (item: Indexer): SelectItem => ({
      id: String(item.seats),
      name: `${item.seats} ${t("carLiability.seatsNumber")}`,
      value: `${item.seats} ${t("carLiability.seatsNumber")}`,
    }),
  )
}

export const getTonnageItems = (): SelectItem[] =>
  seatsData.trucks.map(
    (item): SelectItem => ({
      id: item.tonnage,
      name: item.tonnage,
      value: item.tonnage,
    }),
  )

export const coverageItems = [
  {
    id: "10000000",
    name: `10 ${t("general.coverageSum")}`,
    value: "10000000",
  },
  {
    id: "20000000",
    name: `20 ${t("general.coverageSum")}`,
    value: "20000000",
  },
  {
    id: "30000000",
    name: `30 ${t("general.coverageSum")}`,
    value: "30000000",
  },
  {
    id: "40000000",
    name: `40 ${t("general.coverageSum")}`,
    value: "40000000",
  },
  {
    id: "50000000",
    name: `50 ${t("general.coverageSum")}`,
    value: "50000000",
  },
  {
    id: "100000000",
    name: `100 ${t("general.coverageSum")}`,
    value: "100000000",
  },
  {
    id: "150000000",
    name: `150 ${t("general.coverageSum")}`,
    value: "150000000",
  },
  {
    id: "200000000",
    name: `200 ${t("general.coverageSum")}`,
    value: "200000000",
  },
]

export const getNumberOfParticipantsItems = (): SelectItem[] =>
  Array.from({ length: 54 }, (v, index) => ({
    id: String(index + 1),
    name: t("carLiability.step2.participant", { 0: index + 1 }),
    value: String(index + 1),
  }))

export const voluntaryCivilLiabilityInsuranceItems = [
  {
    id: "50000000",
    name: `50 ${t("general.coverageSum")}`,
    value: "50000000",
  },
  {
    id: "100000000",
    name: `100 ${t("general.coverageSum")}`,
    value: "100000000",
  },
  {
    id: "150000000",
    name: `150 ${t("general.coverageSum")}`,
    value: "150000000",
  },
]

export const deductibleItems = [
  {
    id: "500,000",
    name: t("general.price", { 0: "500,000" }),
    loading: 1,
  },
  {
    id: "1,000,000",
    name: t("general.price", { 0: "1,000,000" }),
    loading: 0.9,
  },
  {
    id: "2,000,000",
    name: t("general.price", { 0: "2,000,000" }),
    loading: 0.85,
  },
  {
    id: "3,000,000",
    name: t("general.price", { 0: "3,000,000" }),
    loading: 0.8,
  },
  {
    id: "5,000,000",
    name: t("general.price", { 0: "5,000,000" }),
    loading: 0.7,
  },
]
