import React, { ReactElement } from "react"
import { Box, BoxProps } from "../box"
import { SVGIconProps } from "../../core"

interface Props {
  boxProps?: BoxProps
  props?: SVGIconProps
}

export const SvgHint = ({ boxProps, props }: Props): ReactElement => (
  <Box {...boxProps}>
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.2453 1.76027C7.90362 -0.584309 4.10466 -0.58664 1.76005 1.75503C-0.584524 4.09676 -0.586883 7.89574 1.75485 10.2404C4.09652 12.5849 7.89553 12.5873 10.2401 10.2456C12.5847 7.90389 12.587 4.10485 10.2453 1.76027ZM6.83784 9.80758C6.83784 9.90016 6.76281 9.97513 6.67029 9.97513H5.3299C5.23738 9.97513 5.16236 9.90016 5.16236 9.80758V4.83176C5.16236 4.73918 5.23738 4.66421 5.3299 4.66421H6.67029C6.76281 4.66421 6.83784 4.73915 6.83784 4.83176V9.80758ZM6.0001 3.96887C5.4643 3.96887 5.02836 3.53299 5.02836 2.99717C5.02836 2.4614 5.46427 2.02543 6.0001 2.02543C6.53592 2.02543 6.97183 2.46137 6.97183 2.99717C6.97183 3.53299 6.53586 3.96887 6.0001 3.96887Z"
        fill="#565656"
      />
    </svg>
  </Box>
)
