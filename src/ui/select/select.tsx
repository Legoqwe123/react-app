import React, { ReactElement } from "react"
import Downshift from "downshift"

import { Box, BoxProps } from "../box"
import { SelectMenu } from "./select-menu"
import { SelectBase } from "./select-base"

import { SelectItem } from "../../core"
import { SelectMobile } from "./select-mobile"
import { useMediaQuery } from "react-responsive"
import { theme } from "../../theme/theme"

type Props = BoxProps & {
  id: string
  items: SelectItem[]
  onChange?: (item: SelectItem) => void
  selectedValue?: SelectItem
  initialValue?: SelectItem
  inputProps?: BoxProps
  hasArrowIcon?: boolean
  name: string
  shouldBanTyping?: boolean
}

export const Select = ({
  id,
  items,
  onChange,
  selectedValue,
  initialValue,
  inputProps,
  name,
  shouldBanTyping,
  ...rest
}: Props): ReactElement<Props> => {
  const isMobile = !useMediaQuery({
    minWidth: theme("breakpoints.0"),
  })

  return isMobile ? (
    <SelectMobile
      name={name}
      items={items}
      handleChange={onChange}
      initialValue={initialValue}
      {...inputProps}
      {...rest}
    />
  ) : (
    <Downshift
      id={id}
      initialSelectedItem={initialValue}
      selectedItem={selectedValue}
      onChange={(selectedItem: SelectItem | null): void => {
        onChange && selectedItem && onChange(selectedItem)
      }}
      itemToString={(item: SelectItem | null): string =>
        item ? item.name : ""
      }
    >
      {({
        isOpen,
        getRootProps,
        getItemProps,
        getInputProps,
        getMenuProps,
        setState,
        clearSelection,
      }): ReactElement => (
        <Box position={isOpen && "relative"} {...rest} {...getRootProps()}>
          <SelectBase
            name={name}
            disabled={items.length === 0}
            getInputProps={getInputProps}
            setState={setState}
            inputProps={{ ...inputProps, readOnly: shouldBanTyping }}
            clearSelection={clearSelection}
            isOpen={isOpen}
          />

          <SelectMenu
            items={items}
            isOpen={isOpen}
            getMenuProps={getMenuProps}
            getItemProps={getItemProps}
          />
        </Box>
      )}
    </Downshift>
  )
}

Select.defaultProps = {
  width: "100%",
  height: "60px",
  zIndex: 1,
  openOnInputClick: true,
  hasArrowIcon: true,
}
