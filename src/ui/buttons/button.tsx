import React, { ReactElement } from "react"
import { ButtonBase, ButtonBaseProps } from "./button-base"

type Props = ButtonBaseProps & {
  text: string
}

export const Button = ({ text, ...rest }: Props): ReactElement => (
  <ButtonBase {...(rest as ButtonBaseProps)}>{text}</ButtonBase>
)
