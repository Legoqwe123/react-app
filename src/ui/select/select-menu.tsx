import React, { ReactElement } from "react"
import {
  GetItemPropsOptions,
  GetMenuPropsOptions,
  GetPropsCommonOptions,
} from "downshift"
import styled from "styled-components"

import { SelectMenuItem } from "./select-menu-item"
import { Box } from "../box"

import { theme } from "../../theme/theme"
import { SelectItem } from "../../core"

interface Props {
  isOpen: boolean
  items: SelectItem[]
  getItemProps: (options: GetItemPropsOptions<SelectItem>) => void
  getMenuProps: (
    options?: GetMenuPropsOptions,
    otherOptions?: GetPropsCommonOptions,
  ) => void
}

const Root = styled(Box)<any>`
  margin-top: 2px;
  position: relative;
  z-index: 6;

  &:before {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    transform: rotate(45deg);
    top: -8px;
    left: 16px;
    border-top: ${theme("borders.1") + theme("colors.greys.0")};
    border-left: ${theme("borders.1") + theme("colors.greys.0")};
    border-top-left-radius: 3px;
    background-color: ${theme("colors.white")};
  }
`

export const SelectMenu = ({
  items,
  isOpen,
  getItemProps,
  getMenuProps,
}: Props): ReactElement<Props> | null =>
  isOpen ? (
    <Root
      borderRadius="6px"
      bg="white"
      maxHeight="300px"
      overflow="auto"
      border={theme("borders.1") + theme("colors.greys.0")}
      {...getMenuProps()}
    >
      {items.map(
        (item, index): ReactElement => (
          <SelectMenuItem
            item={item}
            key={item.id}
            index={index}
            getItemProps={getItemProps}
          />
        ),
      )}
    </Root>
  ) : null
