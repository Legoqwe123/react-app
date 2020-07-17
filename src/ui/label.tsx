import React from "react"

import { Text, TextProps } from "./text"

type Props = TextProps & {
  htmlFor?: string
}

export const Label = ({
  htmlFor,
  ...rest
}: Props): React.ReactElement<Props> => (
  <Text as="label" htmlFor={htmlFor} {...(rest as TextProps)} />
)
