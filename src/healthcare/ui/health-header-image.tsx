import React, { ReactElement } from "react"
import { Box } from "../../ui/box"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { getImagePath } from "../../hooks/getImagePath"

interface Props {
  isBigImg: boolean
}

const StyledSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 1000px;
  background-color: transparent;
  @media screen and (min-width: ${theme("breakpoints.5")}) {
    display: none;
  }
`

const StyledImage = styled.img`
  position: relative;
  display: block;
  background-color: transparent;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: auto;
  max-height: 384px;

  @media screen and (min-width: ${theme("breakpoints.1")}) {
    max-height: 320px;
    margin-right: 40px;
  }

  @media screen and (min-width: ${theme("breakpoints.2")}) {
    margin-right: 50px;
  }

  @media screen and (min-width: ${theme("breakpoints.3")}) {
    max-height: 384px;
    margin-right: 42px;
    position: relative;
    z-index: 0;
  }

  @media screen and (min-width: ${theme("breakpoints.4")}) {
    max-width: 308px;
  }
`

export const HealthHeaderImage = ({ isBigImg }: Props): ReactElement => (
  <Box
    position="relative"
    width="100%"
    mt={["50px", "50px", 0, "10px", 0, "-85px"]}
  >
    <StyledImage
      src={
        isBigImg
          ? getImagePath("health-header-mobile.png", true)
          : getImagePath("health-header.png")
      }
    />

    {isBigImg ? (
      <StyledSvg
        viewBox="0 0 375 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M58.4494 2.57411C34.2999 -3.61325 12.3 1.83024 -2 13.8069V134L398 134C398 134 385.088 109.521 364.517 87.0461C343.946 64.5707 304.067 32.229 258.899 32.229C213.73 32.229 186.963 54.0674 145.865 43.6867C104.767 33.3059 95.9541 12.1832 58.4494 2.57411Z"
            fill="#308FFF"
            fillOpacity="0.15"
          />
        </g>
      </StyledSvg>
    ) : (
      <StyledSvg
        viewBox="0 0 895 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M150.19 2.60057C90.1519 -11.1699 35.5515 32.9594 0 59.6145V256H895C806.784 208.342 737.488 160.659 720.243 149.061C675.987 119.295 611.908 88.18 547.72 88.18C483.533 88.18 436.054 111.283 333.88 88.18C231.706 65.0768 243.431 23.9864 150.19 2.60057Z"
            fill="#308FFF"
            fillOpacity="0.15"
          />
        </g>
      </StyledSvg>
    )}
  </Box>
)
