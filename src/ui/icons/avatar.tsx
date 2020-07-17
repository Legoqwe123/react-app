import React, { ReactElement } from "react"
import { Box } from "../box"

export const SvgAvatar = (): ReactElement => (
  <Box>
    <svg
      width="36px"
      height="38px"
      viewBox="0 0 36 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="2" width="36" height="36" rx="18" fill="#308FFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1482 22.8635V21.4316C20.4704 21.2719 21.3918 20.1751 21.4884 19.3182C21.7418 19.2988 22.14 19.0661 22.2574 18.1476C22.3204 17.6543 22.0698 17.3772 21.918 17.2899C21.918 17.2899 22.2961 16.5718 22.2961 15.7048C22.2961 13.9665 21.6137 12.4831 20.1482 12.4831C20.1482 12.4831 19.6392 11.4092 18.0004 11.4092C14.9634 11.4092 13.7048 13.3573 13.7048 15.7048C13.7048 16.4952 14.0828 17.2899 14.0828 17.2899C13.931 17.3772 13.6804 17.655 13.7434 18.1476C13.8608 19.0661 14.2589 19.2988 14.5123 19.3182C14.609 20.1751 15.5304 21.2719 15.8526 21.4316V22.8635C15.1366 25.0113 9.40912 23.5794 9.40912 28.591H26.5916C26.5916 23.5794 20.8641 25.0113 20.1482 22.8635Z"
        fill="white"
      />
    </svg>
  </Box>
)