import React, { ReactElement } from "react"
import { Box, BoxProps } from "../box"
import { SVGIconProps } from "../../core"

interface Props {
  box?: BoxProps
  props?: SVGIconProps
  fill: string
}

export const SvgArrowDown = ({ box, fill, props }: Props): ReactElement => (
  <Box {...box}>
    {((): ReactElement => (
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0972 1.91544C13.4522 1.56042 13.4522 0.984815 13.0972 0.629792C12.7422 0.27477 12.1666 0.27477 11.8116 0.629792L6.99987 5.44152L2.18815 0.629792C1.83312 0.27477 1.25752 0.27477 0.902497 0.629792C0.547475 0.984815 0.547475 1.56042 0.902497 1.91544L6.35704 7.36999C6.71207 7.72501 7.28767 7.72501 7.64269 7.36999L13.0972 1.91544Z"
          fill={fill}
        />
      </svg>
    ))()}
  </Box>
)
