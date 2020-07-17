import React, { ReactElement } from "react"

interface Props {
  fill?: string
}

export const SvgShield = ({ fill = "#565656" }: Props): ReactElement => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    style={{ backgroundColor: "transparent" }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M13.511 1.78368L7.62729 0.0185449C7.54491 -0.00618164 7.45711 -0.00618164 7.3747 0.0185449L1.49089 1.78368C1.30503 1.83943 1.17773 2.01053 1.17773 2.20459V8.67674C1.17773 9.51855 1.51854 10.3803 2.19064 11.238C2.70396 11.8931 3.41414 12.5509 4.3014 13.1932C5.79193 14.2721 7.25968 14.934 7.32144 14.9616C7.37854 14.9872 7.43977 15 7.501 15C7.56223 15 7.62346 14.9872 7.68056 14.9616C7.74229 14.934 9.21 14.2721 10.7005 13.1932C11.5878 12.5509 12.2979 11.8931 12.8113 11.238C13.4834 10.3803 13.8241 9.51858 13.8241 8.67674V2.20459C13.8241 2.01053 13.6969 1.83943 13.511 1.78368Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="15" height="15" fill="transparent" />
      </clipPath>
    </defs>
  </svg>
)
