import React, { ReactElement } from "react"
import { ErrorMessage } from "formik"

import { Text, TextProps } from "../text"

type Props = TextProps & {
  name: string
  children?: never
}

export const InputFeedback = ({
  name,
  ...rest
}: Props): ReactElement<Props> => (
  <ErrorMessage
    name={name}
    render={(error: string): ReactElement => (
      <Text my={0} color="error" fontSize={0} {...rest}>
        {error}
      </Text>
    )}
  />
)
