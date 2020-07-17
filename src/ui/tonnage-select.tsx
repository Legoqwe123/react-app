import React, { ReactElement } from "react"
import { t } from "../i18n/i18n"
import { SelectItem } from "../core"
import { BoxProps } from "./box"
import { getTonnageItems } from "../core/items"

import { Select } from "./select/select"

interface Props {
  handleChange: (item: SelectItem) => void
  styles?: BoxProps
  initialValue?: SelectItem
}

export const TonnageSelect = ({
  handleChange,
  styles,
  initialValue,
}: Props): ReactElement => (
  <Select
    id="tonnage-select"
    name="tonnage"
    inputProps={{ fontSize: 3, placeholder: t("carLiability.tonnage") }}
    onChange={handleChange}
    items={getTonnageItems()}
    mt="15px"
    initialValue={initialValue}
    {...styles}
  />
)
