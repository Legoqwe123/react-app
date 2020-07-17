import "rc-slider/assets/index.css"
import React, { ReactElement } from "react"

import { Box, BoxProps } from "../../ui/box"

import { RangeInput } from "./range-input"
import { LinkedInputs } from "./linked-inputs"

type Props = BoxProps & {
  minName: string
  maxName: string
  minValue: number
  maxValue: number
  values: any
  setFieldValue: (field: string, value?: number, validate?: boolean) => void
}

export const SliderInput = ({
  values,
  setFieldValue,
  minName,
  maxName,
  minValue,
  maxValue,
  ...rest
}: Props): ReactElement => {
  const onSliderChange = (value: number[]): void => {
    setFieldValue(minName, value[0])
    setFieldValue(maxName, value[1])
  }

  return (
    <Box {...rest}>
      <RangeInput
        value={[values[minName] || minValue, values[maxName] || maxValue]}
        changeValue={onSliderChange}
        min={minValue}
        max={maxValue}
      />

      <LinkedInputs
        minName={minName}
        maxName={maxName}
        setFieldValue={setFieldValue}
        values={values}
      />
    </Box>
  )
}
