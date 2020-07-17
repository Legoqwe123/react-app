import React, { ReactElement } from "react"
import { Select } from "./select"
import { cityItems } from "../../city-data"
import { BoxProps } from "../box"

type Props = BoxProps & {
  id: string
  name: string
  inputProps?: BoxProps
}

export const SelectCity = ({ name, id, ...rest }: Props): ReactElement => (
  <Select id={id} name={name} items={cityItems} shouldBanTyping {...rest} />
)
