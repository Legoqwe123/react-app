import React, { ReactElement } from "react"
import styled from "styled-components"
import { Box } from "../../ui/box"
import { theme } from "../../theme/theme"
import { getImagePath } from "../../hooks/getImagePath"

interface Props {
  isBigImg: boolean
}

const StyledSvg = styled.svg`
  position: absolute;
  width: 110%;
  max-width: 884px;
  height: auto;
  left: 0;
  bottom: 0;
  background-color: transparent;

  @media screen and (max-width: ${theme("breakpoints.3")}) {
    max-width: 100%;
  }
  @media screen and (min-width: ${theme("breakpoints.5")}) {
    display: none;
  }
`

const StyledImage = styled.img`
  position: relative;
  background-color: transparent;
  z-index: 1;
  margin-left: 0;
  max-width: 411px;

  @media screen and (min-width: ${theme("breakpoints.1")}) {
    max-width: 350px;
    margin-left: 110px;
  }

  @media screen and (min-width: ${theme("breakpoints.3")}) {
    margin-left: 250px;
  }

  @media screen and (min-width: ${theme("breakpoints.4")}) {
    margin-left: 320px;
  }
`

export const HeaderImage = ({ isBigImg }: Props): ReactElement => (
  <Box
    position="relative"
    mt={["45px", "45px", 0, 0, "45px"]}
    display={isBigImg ? "flex" : "block"}
    justifyContent="center"
  >
    <StyledImage
      src={
        isBigImg
          ? getImagePath("comprehensive-car-header-mobile.png", true)
          : getImagePath("comprehensive-car-header.png")
      }
    />
    <StyledSvg
      viewBox="0 0 884 298"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M133.593 5.72451C80.2227 -8.03543 31.6031 4.07024 0 30.7049V298L884 298C884 298 855.464 243.562 810.002 193.58C764.54 143.598 676.409 71.6735 576.587 71.6735C476.764 71.6735 417.609 120.239 326.782 97.1539C235.956 74.0684 216.479 27.0939 133.593 5.72451Z"
          fill="#308FFF"
          fillOpacity="0.15"
        />
      </g>
    </StyledSvg>
  </Box>
)
