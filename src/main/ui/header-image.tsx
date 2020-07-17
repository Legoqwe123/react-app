import React, { ReactElement } from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { Box } from "../../ui/box"
import { theme } from "../../theme/theme"
import { getImagePath } from "../../hooks/getImagePath"

const StyledSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  height: auto;
  background-color: transparent;
  max-height: 533px;
  @media (min-width: ${theme("breakpoints[5]")}) {
    bottom: calc(100% - 532px);
  }
`

const StyledImage = styled.img`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  background-color: transparent;
  z-index: 1;

  @media (min-width: ${theme("breakpoints[0]")}) {
    width: 410px;
  }
  @media (min-width: ${theme("breakpoints[1]")}) {
    width: 570px;
  }
  @media (min-width: ${theme("breakpoints[2]")}) {
    width: 738px;
  }
  @media (min-width: ${theme("breakpoints[5]")}) {
    margin-left: 0;
  }
`

const ImagesContainer = styled(Box)`
  @media (min-width: 2360px) {
    max-width: 1280px;
  }
`

export const HeaderImage = (): ReactElement => {
  const isMobile = useMediaQuery({ maxWidth: theme("breakpoints.0") })

  return (
    <ImagesContainer
      position={["relative", "absolute"]}
      right="0"
      bottom={["0", "0", "0", "0", "0", "0", "auto"]}
      top={{ 5: "68px" }}
      width={["auto", "65%", "75%"]}
      maxWidth={[
        "1081px",
        "1081px",
        "1081px",
        "1081px",
        "1081px",
        "1081px",
        "calc(37.5% + 370px)",
      ]}
    >
      <StyledImage
        src={
          isMobile
            ? getImagePath("header-backdrop-mobile.png", true)
            : getImagePath("header-backdrop.png")
        }
      />

      <StyledSvg
        width="100%"
        height="100%"
        viewBox="0 0 375 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M304.753 0C349.329 -3.82006e-06 372.051 30.1292 375 34.4831V155H0C5.20352 132.882 32.8576 114.846 40.7609 110.59C59.8404 100.315 80.6451 100.315 107.539 100.315C134.434 100.315 165.157 38.8383 207.967 28.2135C250.778 17.5887 264.476 3.45155e-06 304.753 0Z"
            fill="#F6F3FF"
          />
        </g>
      </StyledSvg>
    </ImagesContainer>
  )
}
