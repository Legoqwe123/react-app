import { SelectItem } from "."

export const convertArrayForSelect = (array: string[]): SelectItem[] =>
  array.map((item: string) => ({
    id: item,
    name: item,
  }))

export const convertItemForSelect = (value: string): SelectItem => ({
  id: value,
  name: value,
})
