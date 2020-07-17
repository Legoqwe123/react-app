import React, { ReactElement, Fragment } from "react"
import { Box } from "../ui/box"
import { HeaderLeftSide } from "./ui/header-left-side"
import { HealthHeaderForm } from "./ui/health-header-form"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"
import styled from "styled-components"

const StyledSvg = styled.svg`
  display: none;
  position: absolute;
  bottom: calc(100% - 663px);
  left: 0;
  width: 50%;
  background-color: transparent;
  @media screen and (min-width: ${theme("breakpoints.5")}) {
    display: block;
  }
`

export const Header = (): ReactElement => {
  const isMobile = !useMediaQuery({
    minWidth: theme("breakpoints.1"),
  })

  return (
    <Fragment>
      <Box
        display="flex"
        justifyContent="space-between"
        mt={["30px", "30px", "60px", "90px"]}
        width={{ 5: theme("breakpoints.5") }}
        mx={{ 5: "auto" }}
      >
        <HeaderLeftSide isMobile={isMobile} />

        {!isMobile && <HealthHeaderForm isMobile={isMobile} />}
      </Box>

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
    </Fragment>
  )
}
