import React, { ReactElement } from "react"
import { FieldProps } from "formik"
import { MaskedInputProps } from "react-text-mask"

import { InputBase } from "../inputs/input-base"
import { Box } from "../box"
import { RestProps, Indexer, SVGIconProps } from "../../core"
import { TextareaBase } from "./textarea-base"
import { InputMask } from "./input-mask"
import { InputLabel } from "./input-label"

type Props = MaskedInputProps &
  RestProps & {
    label?: string
    valid?: boolean
    children?: never
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fieldProps: FieldProps<Indexer | any>
    icon?: ReactElement<SVGIconProps>
    isTextArea?: boolean
    shouldShowLabelPlaceholder?: boolean
    placeholderColor?: string
    required?: boolean
  }

export const LabeledInput = ({
  label,
  fieldProps,
  icon,
  isTextArea,
  mask,
  shouldShowLabelPlaceholder,
  required,
  ...props
}: Props): ReactElement<Props> => {
  const placeholderColor = shouldShowLabelPlaceholder
    ? "transparent"
    : props.placeholderColor

  return (
    <Box position="relative" backgroundColor="white">
      <InputLabel
        shouldShowLabelPlaceholder={shouldShowLabelPlaceholder}
        label={label}
        placeholder={props.placeholder}
        required={required}
      />

      <Box position="relative">
        {isTextArea ? (
          <TextareaBase {...fieldProps.field} {...props} />
        ) : mask ? (
          <InputMask
            mask={mask}
            {...fieldProps.field}
            {...props}
            placeholderColor={placeholderColor}
          />
        ) : (
          <InputBase
            {...fieldProps.field}
            {...props}
            placeholderColor={placeholderColor}
          />
        )}

        {icon}
      </Box>
    </Box>
  )
}

LabeledInput.defaultProps = {
  label: "",
  valid: true,
}
