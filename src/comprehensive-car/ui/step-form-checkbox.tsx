import React, { ReactElement } from "react"
import styled from "styled-components"
import {
  layout,
  SpaceProps,
  DisplayProps,
  GridAreaProps,
  AlignItemsProps,
  LayoutProps,
} from "styled-system"

import { CheckBox } from "../../ui/checkbox"
import { Text as TextUI, TextProps } from "../../ui/text"

const Text = styled(TextUI)`
  :hover {
    cursor: pointer;
  }
  ${layout}
`

type LabelProps = SpaceProps &
  GridAreaProps &
  DisplayProps &
  AlignItemsProps &
  LayoutProps

type Props = LabelProps & {
  isChecked?: boolean
  isDisabled?: boolean
  cursor?: string
  onToggle?: (isChecked: boolean) => void
  children?: React.ReactNode
  isValid?: boolean
  touched?: boolean
  textProps?: TextProps
}

export const StepFormCheckbox = ({
  children,
  textProps,
  ...props
}: Props): ReactElement => (
  <CheckBox {...props} mb={props.mb || "32px"} display="flex">
    <Text
      ml="20px"
      mb={0}
      mt="-2px"
      lineHeight="28px"
      fontSize={3}
      as="span"
      {...textProps}
    >
      {children}
    </Text>
  </CheckBox>
)
