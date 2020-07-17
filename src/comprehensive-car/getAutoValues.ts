/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectItem } from "../core"
import { ANOTHER_MODEL, MODEL_CAR_YEARS } from "../core/constants"
import { convertArrayForSelect } from "../core/convert-to-select-item"
import AutoData from "./auto_data.json"
import get from "lodash/get"

const carItems: any = AutoData[0].data

const getCarItems = (): any => ({
  ...carItems,
  PORSCHE: {},
  SUZUKI: {},
  THACO: {},
})

export const carBrandItems = convertArrayForSelect(Object.keys(getCarItems()))

export const getCarModels = (brand: string): SelectItem[] => {
  if (!brand) {
    return []
  }

  const modelList = Object.keys(getCarItems()[brand])

  return convertArrayForSelect([...modelList, ANOTHER_MODEL])
}

export const getYears = (brand: string, model: string): SelectItem[] => {
  if (!brand || !model) {
    return []
  }

  if (model === ANOTHER_MODEL) {
    return convertArrayForSelect(MODEL_CAR_YEARS)
  }

  return convertArrayForSelect(Object.keys(getCarItems()[brand][model]))
}

export const getCarPrice = (
  brand: string,
  model: string,
  year: string,
): string => {
  if (model === ANOTHER_MODEL) {
    return ""
  }

  return get(getCarItems(), [brand, model, year], "")
}
