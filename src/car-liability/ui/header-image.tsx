import React, { ReactElement, Fragment } from "react"
import styled from "styled-components"

import { Box } from "../../ui/box"
import { theme } from "../../theme/theme"
import { getImagePath } from "../../hooks/getImagePath"

const Backdrop = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (min-width: ${theme("breakpoints.5")}) {
    left: 0;
    bottom: calc(100% - 652px);
    width: 50%;
    max-height: 584px;
  }
`

const StyledImage = styled.img`
  position: relative;
  width: 190px;
  bottom: -2px;
  left: calc(50% - 95px);
  background-color: transparent;
  @media (min-width: 375px) {
    width: 223px;
    left: calc(50% - 111px);
  }
  @media (min-width: 414px) {
    left: 96px;
  }
  @media (min-width: ${theme("breakpoints.1")}) {
    width: 180px;
    left: 330px;
  }
  @media (min-width: ${theme("breakpoints.4")}) {
    width: 273px;
    left: 490px;
  }
  @media (min-width: ${theme("breakpoints.5")}) {
    display: none;
  }
`

const BigScreenImage = styled.img`
  display: none;
  max-width: 412px;
  max-height: 391px;
  position: relative;
  z-index: 2;

  @media (min-width: ${theme("breakpoints.5")}) {
    display: block;
    margin-top: auto;
  }
`

export const HeaderImage = (): ReactElement => (
  <Fragment>
    <Box
      position={[
        "relative",
        "relative",
        "relative",
        "relative",
        "relative",
        "relative",
        "unset",
      ]}
      maxWidth={["414px", "414px", "570px", "570px", "570px", "801px"]}
      mt={["69px", "69px", 0, 0, 0, "-72px"]}
    >
      <picture>
        <source
          media={`(min-width: ${theme("breakpoints.1")})`}
          srcSet={getImagePath("car-liability-backdrop-desktop.svg")}
        />
        <Backdrop src={getImagePath("car-liability-backdrop.svg")} />
      </picture>
      <StyledImage src={getImagePath("car-liability-header.png")} />
    </Box>

    <BigScreenImage src={getImagePath("car-liability-header.png")} />
  </Fragment>
)
