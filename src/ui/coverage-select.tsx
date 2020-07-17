import React, { ReactElement } from "react"
import { coverageItems } from "../core/items"
import { BoxProps } from "./box"

import { Select } from "./select/select"

type Props = BoxProps & {
  name: string
  placeholder?: string
}

export const CoverageSelect = ({
  placeholder,
  ...selectProps
}: Props): ReactElement => (
  <Select
    id="coverage-select"
    items={coverageItems}
    inputProps={{ fontSize: 3, placeholder }}
    mt="15px"
    mb="0"
    {...selectProps}
  />
)
