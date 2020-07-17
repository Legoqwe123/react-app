import React, { ReactElement, ChangeEvent } from "react"
import { GetInputPropsOptions } from "downshift"

import { Box, BoxProps } from "../box"
import { InputField } from "../inputs/input-field"

import { SelectItem } from "../../core"
import { SvgArrowDown } from "../icons/arrow-down"
import { theme } from "../../theme/theme"
import noop from "lodash/noop"

export type SelectBaseComponentProps = GetInputPropsOptions & {
  onClick: () => void
  value: string | null
  autoComplete: string
  isDisabled?: boolean
}

interface Props {
  getInputProps: <T>(options?: T) => T & GetInputPropsOptions
  setState: (
    stateToSet: {
      highlightedIndex?: number | null
      inputValue?: string | null
      isOpen?: boolean
      selectedItem?: SelectItem | null
    },
    cb?: () => void,
  ) => void
  inputProps?: BoxProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clearSelection: (cb?: any) => void
  name: string
  isOpen: boolean
  disabled: boolean
}

export const SelectBase = ({
  getInputProps,
  setState,
  inputProps,
  clearSelection,
  name,
  isOpen,
  disabled,
}: Props): ReactElement => {
  const handleClick = (): void => {
    setState({
      isOpen: true,
    })
  }

  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
      display="flex"
      alignItems="center"
    >
      <Box width="100%">
        <InputField
          onClick={handleClick}
          name={name}
          fontSize={4}
          disabled={disabled}
          icon={
            <SvgArrowDown
              fill={isOpen ? theme("colors.greens.0") : theme("colors.blues.0")}
              box={{
                position: "absolute",
                top: "22px",
                right: "26px",
                cursor: !disabled ? "pointer" : "not-allowed",
                onClick: !disabled ? handleClick : noop,
              }}
            />
          }
          {...inputProps}
          {...getInputProps({
            onChange: (event: ChangeEvent<HTMLInputElement>): void => {
              !event.target.value && clearSelection()
            },
          })}
          autoComplete="off"
        />
      </Box>
    </Box>
  )
}
