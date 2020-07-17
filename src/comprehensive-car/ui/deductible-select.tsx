import React, { ReactElement } from "react"
import { Select } from "../../ui/select/select"
import { t } from "../../i18n/i18n"

import { SelectItem, RestProps } from "../../core"
import { deductibleItems } from "../../core/items"

type Props = RestProps & {
  setFieldValue?: (field: string, value: string) => void
  initialValue?: string
  onChange?: (value: string) => void
}

export const DeductibleSelect = ({
  setFieldValue,
  initialValue,
  onChange,
  ...rest
}: Props): ReactElement => {
  const items = deductibleItems.map(
    (item): SelectItem => ({
      id: item.id,
      name: item.name,
      value: item.name,
    }),
  )

  const handleChange = (item: SelectItem): void => {
    setFieldValue && setFieldValue("deductible", item.id)
    onChange && onChange(item.id)
  }

  return (
    <Select
      id="deductible-select"
      name="deductible"
      items={items}
      onChange={handleChange}
      inputProps={{
        placeholder: t("comprehensiveCar.deductiblePlaceholder"),
        fontSize: 3,
        ...rest,
      }}
      initialValue={items.find(
        (item: SelectItem): boolean => item.id === initialValue,
      )}
    />
  )
}
