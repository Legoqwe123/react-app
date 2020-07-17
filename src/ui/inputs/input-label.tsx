import React, { ReactElement } from "react"

import { Label } from "../label"
import { Text, TextProps } from "../text"

interface Props {
  shouldShowLabelPlaceholder?: boolean
  placeholder?: string
  label?: string
  required?: boolean
  labelStyles?: TextProps
}

export const InputLabel = ({
  shouldShowLabelPlaceholder,
  placeholder,
  label,
  required = true,
  labelStyles,
}: Props): ReactElement =>
  shouldShowLabelPlaceholder ? (
    <Label
      position="absolute"
      left="25px"
      top="14px"
      display="flex"
      fontSize={3}
      lineHeight="34px"
      {...labelStyles}
    >
      {placeholder}
      {required && (
        <Text m={0} color="#F00" lineHeight="24px">
          &lowast;
        </Text>
      )}
    </Label>
  ) : (
    <Label display="block" textStyle="normal">
      {label}
    </Label>
  )
