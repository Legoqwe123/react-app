import "rc-slider/assets/index.css"
import React, { ReactElement } from "react"
import { Range } from "rc-slider"

import { theme } from "../../theme/theme"

interface Props {
  value: number[]
  changeValue: (value: number[]) => void
  min: number
  max: number
}

const dotStyle = {
  backgroundColor: theme("colors.primary"),
  border: "none",
  height: "30px",
  width: "30px",
  boxShadow: theme("shadows.rangeDot"),
}

const handleStyle = [dotStyle, dotStyle]

const trackStyle = [
  { backgroundColor: theme("colors.primary"), marginTop: "7px" },
]

const railStyle = {
  backgroundColor: theme("colors.greys.2"),
  borderRadius: "1px",
  marginTop: "7px",
}

const style = {
  width: "100%",
}

export const RangeInput = ({
  value,
  changeValue,
  min,
  max,
}: Props): ReactElement => (
  <Range
    defaultValue={value}
    value={value}
    min={min}
    max={max}
    onChange={changeValue}
    handleStyle={handleStyle}
    railStyle={railStyle}
    trackStyle={trackStyle}
    style={style}
    pushable
  />
)
