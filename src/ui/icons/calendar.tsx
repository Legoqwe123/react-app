import React, { ReactElement } from "react"
import { theme } from "../../theme/theme"
import { SVGIconProps } from "../../core"
import { Box, BoxProps } from "../box"

interface Props {
  fill?: string
  boxProps?: BoxProps
  props?: SVGIconProps
}

export const SvgCalendar = ({
  fill = theme("colors.primary"),
  boxProps,
  ...props
}: Props): ReactElement => (
  <Box {...boxProps}>
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3C4.44772 3 4 3.44771 4 4V5H3C2.44771 5 2 5.44772 2 6V19C2 19.5523 2.44772 20 3 20H19C19.5523 20 20 19.5523 20 19V6C20 5.44772 19.5523 5 19 5H18V4C18 3.44771 17.5523 3 17 3C16.4477 3 16 3.44771 16 4V5H6V4C6 3.44771 5.55228 3 5 3ZM4 8H18V18H4V8ZM10 11H7V14H10V11Z"
        fill={fill}
      />
    </svg>
  </Box>
)
