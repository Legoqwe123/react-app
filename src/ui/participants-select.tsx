import React, { ReactElement } from "react"
import { BoxProps } from "./box"
import { SelectItem } from "../core"
import { getNumberOfParticipantsItems } from "../core/items"

import { Select } from "./select/select"

type Props = BoxProps & {
  name: string
  onChange: (item: SelectItem) => void
  placeholder?: string
}

export const ParticipantsSelect = ({
  name,
  placeholder,
  ...selectProps
}: Props): ReactElement => (
  <Select
    id="participants-select"
    name={name}
    items={getNumberOfParticipantsItems()}
    inputProps={{ fontSize: 3, placeholder }}
    {...selectProps}
  />
)
