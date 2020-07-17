import React, { ReactElement } from "react"
import { Box } from "../ui/box"
import { HeaderLeft } from "./ui/header-left"
import { ComprehensiveCarHeaderForm } from "./ui/comprehensive-car-header-form"
import { theme } from "../theme/theme"
import styled from "styled-components"

interface Props {
  isMobile: boolean
}

const StyledSvg = styled.svg`
  display: none;
  @media screen and (min-width: ${theme("breakpoints.5")}) {
    display: block;
    position: absolute;
    width: 50%;
    height: auto;
    left: 0;
    bottom: calc(100% - 728px);
    background-color: transparent;
  }
`

const Container = styled(Box)`
  @media screen and (min-width: 1625px) {
    right: calc(50% - 720px);
  }
`

export const Header = ({ isMobile }: Props): ReactElement => (
  <Box
    display="flex"
    justifyContent="space-between"
    pr={isMobile ? 0 : "190px"}
    mt={isMobile ? "26px" : "90px"}
  >
    <HeaderLeft />

    <Container
      display={["none", "none", "block"]}
      position="absolute"
      right={[0, 0, "60px", "60px", "185px", "185px"]}
    >
      <ComprehensiveCarHeaderForm banScrollTo />
    </Container>

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
