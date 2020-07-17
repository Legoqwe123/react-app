import React, { ReactElement } from "react"
import styled from "styled-components"
import { Box } from "../ui/box"
import { getImagePath } from "../hooks/getImagePath"

const StyledImage = styled("img")`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
`

export const InsuranceCardLiabilityImage = (): ReactElement => (
  <Box position="relative" height="179px" display="flex">
    <StyledImage
      style={{
        maxWidth: "210px",
      }}
      src={getImagePath("insurance-card-liability.png")}
    />

    <svg
      width="201"
      height="153"
      viewBox="0 0 201 153"
      fill="none"
      style={{
        backgroundColor: "transparent",
        height: "auto",
        marginLeft: "15px",
        marginTop: "5px",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M171.717 22.5342C198.011 35.0306 183.395 71.9622 176.364 89.4997C163.797 110.832 146.38 131.239 96.7959 139.796C47.212 148.353 21.5833 125.831 13.8643 108C6.14535 90.1683 24.3467 80.5291 30.8643 64.4997C37.3818 48.4703 36.2932 30.17 55.8639 22.5342C75.4346 14.8984 90.5796 36.5359 101.849 34.5913C113.118 32.6466 138.849 6.9137 171.717 22.5342Z"
        fill="white"
      />
    </svg>
  </Box>
)

export const InsuranceCardComprehensiveImage = (): ReactElement => (
  <Box
    position="relative"
    height="176px"
    display="flex"
    mt="15px"
    alignItems="center"
  >
    <StyledImage
      style={{
        maxWidth: "171px",
      }}
      src={getImagePath("insurance-card-comprehensive-car.png")}
    />

    <svg
      width="152"
      height="120"
      viewBox="0 0 152 120"
      fill="none"
      style={{
        backgroundColor: "transparent",
        marginLeft: "10px",
        marginBottom: "13px",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.9998 3.49991C55.1681 -6.42108 87.1766 8.52564 98.4194 23.332C113.41 30.7351 134.021 23.332 147.138 38.1385C160.255 52.945 145.264 91.8112 120.905 108.468C96.5456 125.125 24.9185 127.563 6.60334 84.408C-7.99978 49.9998 5.0758 15.9967 32.9998 3.49991Z"
        fill="white"
      />
    </svg>
  </Box>
)

export const InsuranceCardHealthImage = (): ReactElement => (
  <Box position="relative" display="flex" height="206px" mt="-5px" mb="-15px">
    <StyledImage
      style={{
        maxWidth: "218px",
      }}
      src={getImagePath("insurance-card-health.png")}
    />

    <svg
      width="190"
      height="161"
      viewBox="0 0 190 161"
      fill="none"
      style={{
        backgroundColor: "transparent",
        height: "auto",
        marginLeft: "15px",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M166.536 25.1144C191.248 42.1756 175.422 83.2931 167.82 102.809C154.708 126.143 136.973 147.923 88.8425 152.793C40.7124 157.664 17.1185 129.108 10.5385 107.767C3.9586 86.4252 21.9358 77.1434 28.9722 59.3146C36.0086 41.4859 35.8324 20.2718 55.0322 13.4384C74.2319 6.60498 87.7778 33.0843 98.7164 31.9774C109.655 30.8705 135.646 3.78787 166.536 25.1144Z"
        fill="white"
      />
    </svg>
  </Box>
)
