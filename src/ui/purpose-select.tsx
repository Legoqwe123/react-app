import React, { ReactElement } from "react"
import { purposeItems } from "../core/items"
import { SelectItem } from "../core"
import { t } from "../i18n/i18n"

import { Select } from "./select/select"
import { BoxProps } from "./box"

interface Props {
  handleChange: (item: SelectItem) => void
  initialValue?: string
  styles?: BoxProps
}

export const PurposeSelect = ({
  handleChange,
  initialValue,
  styles,
}: Props): ReactElement => (
  <Select
    id="purpose-select"
    name="purpose"
    items={purposeItems}
    inputProps={{ placeholder: t("carLiability.purpose"), fontSize: 3 }}
    mt="15px"
    onChange={handleChange}
    initialValue={purposeItems.find(
      (item: SelectItem): boolean => item.id === initialValue,
    )}
    {...styles}
  />
)
