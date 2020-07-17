import React, { ReactElement } from "react"
import { Box } from "../box"
import { SVGIconProps } from "../../core"

export const SvgClose = ({ box, props }: SVGIconProps): ReactElement => (
  <Box {...box}>
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="transparent"
      style={{ backgroundColor: "transparent" }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5613 20.52C18.1192 21.0778 19.0237 21.0778 19.5816 20.52C20.1395 19.9621 20.1395 19.0576 19.5816 18.4997L12.0203 10.9385L19.5816 3.37721C20.1395 2.81931 20.1395 1.9148 19.5816 1.35691C19.0237 0.799021 18.1192 0.799021 17.5613 1.35691L10 8.91816L2.43873 1.35689C1.88083 0.799004 0.976313 0.799004 0.418421 1.35689C-0.139473 1.91478 -0.139473 2.8193 0.418421 3.3772L7.97973 10.9385L0.418419 18.4997C-0.139473 19.0576 -0.139473 19.9621 0.418419 20.52C0.976313 21.078 1.88083 21.078 2.43873 20.52L10 12.9587L17.5613 20.52Z"
        fill="white"
      />
    </svg>
  </Box>
)
