import React, { ReactElement } from "react"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { getImagePath } from "../../hooks/getImagePath"

const StyledPicture = styled.picture`
  width: 305px;
  margin-left: auto;
  margin-top: 30px;
  @media (min-width: 375px) {
    width: 360px;
  }
  @media (min-width: ${theme("breakpoints.0")}) {
    margin-right: auto;
  }
  @media (min-width: ${theme("breakpoints.1")}) {
    margin-right: 0;
  }
  @media (min-width: ${theme("breakpoints.3")}) {
    width: 556px;
    margin-left: 245px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  @media (max-width: 374px) {
    width: 305px;
  }
`

export const DescriptionImage = (): ReactElement => (
  <StyledPicture>
    <source
      media={`(min-width: ${theme("breakpoints.0")})`}
      srcSet={getImagePath("description.png")}
    />
    <StyledImage src={getImagePath("description-mobile.png")} />
  </StyledPicture>
)
