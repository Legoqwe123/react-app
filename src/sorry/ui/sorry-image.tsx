import React, { ReactElement } from "react"
import { Box } from "../../ui/box"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { getImagePath } from "../../hooks/getImagePath"

interface Props {
  isMobile: boolean
  isSmallImg: boolean
}

const StyledImage = styled.img`
  position: relative;
  display: block;
  min-height: 300px;
  background-color: transparent;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 645px;

  @media (max-width: ${theme("breakpoints.0")}) {
    max-width: 364px;
  }

  @media screen and (min-width: ${theme("breakpoints.3")}) {
    margin-right: 220px;
  }
`

export const SorryImage = ({ isMobile, isSmallImg }: Props): ReactElement => (
  <Box
    position="relative"
    width={isMobile ? "100%" : "auto"}
    mt={isMobile ? "34px" : "-65px"}
    mx={isMobile ? "auto" : 0}
  >
    <StyledImage
      src={
        isSmallImg
          ? getImagePath("sorry-mobile.png")
          : getImagePath("sorry.png")
      }
    />
  </Box>
)
