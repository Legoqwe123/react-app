import React, { ReactElement } from "react"
import styled from "styled-components"
import { GetItemPropsOptions } from "downshift"

import { Text } from "../text"

import { theme } from "../../theme/theme"
import { SelectItem } from "../../core"

interface Props {
  item: SelectItem
  index: number
  getItemProps: (options: GetItemPropsOptions<SelectItem>) => void
}

const ItemRoot = styled(Text)<any>`
  user-select: none;
  word-break: break-word;

  position: relative;
  z-index: 5;

  margin: 0;
  padding: 16px;

  &:first-child {
    border-radius: 6px 6px 0 0;
  }

  &:last-child {
    border-radius: 0 0 6px 6px;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${theme("colors.white")};
      background-color: ${theme("colors.greens.0")};
    }
  }
`

export const SelectMenuItem = ({
  item,
  index,
  getItemProps,
}: Props): ReactElement<Props> => (
  <ItemRoot
    {...getItemProps({
      item,
      index,
    })}
  >
    {item.name}
  </ItemRoot>
)
