import React, { ReactElement, RefObject } from "react"
import { Field, FieldProps } from "formik"

import { BoxProps } from "../box"

import { Input } from "./input"
import { RestProps, Indexer } from "../../core"

type Props = RestProps & {
  name: string
  reference?: RefObject<HTMLInputElement>
  feedBackBoxProps?: BoxProps
  charactersLeft?: number | null
  isShowCharactersLeft?: boolean
  validateFunc?: (value: string) => string | undefined
}

export const InputField = ({
  name,
  validateFunc,
  ...rest
}: Props): ReactElement<Props> => (
  <Field name={name} validate={validateFunc}>
    {(fieldProps: FieldProps<Indexer>): React.ReactElement => (
      <Input name={name} fieldProps={fieldProps} {...rest} />
    )}
  </Field>
)

InputField.defaultProps = {
  label: "",
}
