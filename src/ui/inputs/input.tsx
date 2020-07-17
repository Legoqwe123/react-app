import React, { ReactElement } from "react"
import { FieldProps } from "formik"
import { GridProps } from "styled-system"

import { Box, BoxProps } from "../box"
import { LabeledInput } from "./labeled-input"
import { InputFeedback } from "./input-feedback"
import { Indexer, RestProps } from "../../core"

type Props = RestProps &
  GridProps & {
    name: string
    fieldProps: FieldProps<Indexer>
    feedBackBoxProps?: BoxProps
    boxProps?: BoxProps
  }

export const Input = ({
  name,
  fieldProps,
  feedBackBoxProps,
  boxProps,
  ...props
}: Props): ReactElement<Props> => {
  const { form, field } = fieldProps
  const isInValid = form.errors[field.name] && form.touched[field.name]

  return (
    <Box display="flex" flexDirection="column" {...boxProps}>
      <LabeledInput
        name={name}
        valid={!isInValid}
        fieldProps={fieldProps}
        {...props}
      />

      <Box mt={0} minHeight="16px" {...feedBackBoxProps}>
        <InputFeedback name={field.name} />
      </Box>
    </Box>
  )
}

Input.defaultProps = {
  label: "",
}
