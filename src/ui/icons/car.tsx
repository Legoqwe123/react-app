import React, { ReactElement } from "react"
import { Box } from "../box"
import { SVGIconProps } from "../../core"

export const SvgCar = ({ box, props }: SVGIconProps): ReactElement => (
  <Box {...box}>
    <svg
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.8694 5.78081L12.8174 2.27417C12.5775 1.47446 11.8556 0.9375 11.0211 0.9375H3.97888C3.14438 0.9375 2.42248 1.47446 2.18261 2.27417L1.13062 5.78081C0.466343 6.06949 0 6.73056 0 7.5V11.25C0 11.7677 0.419769 12.1875 0.9375 12.1875H0.937557L0.9375 13.1249C0.9375 13.6427 1.35721 14.0625 1.875 14.0625H2.81256C3.33029 14.0625 3.75006 13.6427 3.75006 13.125L3.74966 12.1875H11.25L11.2499 13.1249C11.2499 13.6427 11.6697 14.0625 12.1874 14.0625H13.125C13.6428 14.0625 14.0625 13.6427 14.0625 13.125V12.1876L14.0622 12.1875H14.0625C14.5802 12.1875 15 11.7677 15 11.25V7.5C15 6.73055 14.5337 6.06949 13.8694 5.78081L13.8694 5.78081ZM3.97885 2.8125H11.0211L11.8649 5.625H3.13508L3.97885 2.8125H3.97885ZM3.74997 9.84375C3.23218 9.84375 2.81247 9.42398 2.81247 8.90625C2.81247 8.38846 3.23218 7.96875 3.74997 7.96875C4.26776 7.96875 4.68747 8.38846 4.68747 8.90625C4.68747 9.42398 4.26776 9.84375 3.74997 9.84375ZM11.25 9.84375C10.7322 9.84375 10.3125 9.42398 10.3125 8.90625C10.3125 8.38846 10.7322 7.96875 11.25 7.96875C11.7678 7.96875 12.1875 8.38846 12.1875 8.90625C12.1875 9.42398 11.7678 9.84375 11.25 9.84375Z"
        fill="#308FFF"
      />
    </svg>
  </Box>
)
