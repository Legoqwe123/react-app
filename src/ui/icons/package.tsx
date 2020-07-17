import React, { ReactElement } from "react"

interface Props {
  fill?: string
}

export const SvgPackage = ({ fill = "#565656" }: Props): ReactElement => (
  <svg
    width="15"
    height="15"
    style={{ backgroundColor: "transparent" }}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M3.81167 3.98899L10.4137 1.15857L7.68002 0.0355634C7.56455 -0.0118545 7.4351 -0.0118545 7.31964 0.0355634L0.753906 2.73284L3.81167 3.98899Z"
        fill={fill}
      />
      <path
        d="M11.6431 1.66309L5.03906 4.49268L7.50052 5.5039L14.2465 2.73259L11.6431 1.66309Z"
        fill={fill}
      />
      <path
        d="M7.02553 6.33534L4.35393 5.23783V7.31585C4.35393 7.57772 4.14161 7.79003 3.87975 7.79003C3.61788 7.79003 3.40557 7.57772 3.40557 7.31585V4.84823L0.328125 3.58398V11.9315C0.328125 12.1238 0.444239 12.2971 0.622115 12.3701L7.02553 15.0007V6.33534Z"
        fill={fill}
      />
      <path
        d="M7.97461 6.33534V15.0007L14.378 12.3701C14.5559 12.2971 14.672 12.1238 14.672 11.9315C14.672 11.6125 14.672 3.93325 14.672 3.58398L7.97461 6.33534Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="15" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
