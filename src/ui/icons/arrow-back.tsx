import React, { ReactElement, CSSProperties } from "react"

interface Props {
  onClick: () => void
  style?: CSSProperties
}

export const SvgArrowBack = ({ onClick, style }: Props): ReactElement => (
  <svg
    width="27"
    height="23"
    viewBox="0 0 27 23"
    fill="none"
    cursor="pointer"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, ...style }}
    onClick={onClick}
  >
    <path
      d="M12.0085 23L13.9773 21.0312L5.87216 12.9517H26.8636V10.1392H5.87216L13.9773 2.03409L12.0085 0.0909095L0.553977 11.5455L12.0085 23Z"
      fill="#13D5A6"
    />
  </svg>
)
