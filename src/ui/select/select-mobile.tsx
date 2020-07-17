import React, { ReactElement, ChangeEvent, useState } from "react"
import { SelectItem } from "../../core"
import styled from "styled-components"
import { theme } from "../../theme/theme"

import { Box, BoxProps } from "../box"
import { InputLabel } from "../inputs/input-label"

type Props = BoxProps & {
  items: SelectItem[]
  name: string
  inputProps?: BoxProps
  placeholder?: string
  handleChange?: (item: SelectItem) => void
  initialValue?: SelectItem
}

const StyledSelect = styled("select")`
  background-color: transparent;
  width: 100%;
  border: ${`${theme("borders.1")} ${theme("colors.greys.0")}`};
  height: 60px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 6px;
  color: ${theme("colors.text.1")};
  outline: none;
  outline-width: 0;
  appearance: none;
  background: url(/icons/arrow-down.svg) no-repeat 92% 50%;
`

export const SelectMobile = ({
  items,
  name,
  handleChange,
  placeholder,
  initialValue,
  ...rest
}: Props): ReactElement => {
  const [value, setValue] = useState<string>(
    initialValue ? initialValue.id : "",
  )

  const onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target
    handleChange && handleChange({ id: value, name: value })
    setValue(value)
  }

  return (
    <Box
      {...rest}
      position="relative"
      backgroundColor={rest.backgroundColor || "white"}
    >
      <InputLabel
        shouldShowLabelPlaceholder={!value}
        placeholder={placeholder}
        labelStyles={{ zIndex: -1 }}
      />
      <StyledSelect
        name={name}
        onChange={onChange}
        defaultValue={initialValue ? initialValue.id : ""}
        disabled={items.length === 0}
        required
      >
        <option value="" disabled></option>

        {items.map((item: SelectItem) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </StyledSelect>
    </Box>
  )
}
