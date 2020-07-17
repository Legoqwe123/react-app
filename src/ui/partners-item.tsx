import React, { ReactElement } from "react"
import { getImagePath } from "../hooks/getImagePath"
import styled from "styled-components"
import { theme } from "../theme/theme"

interface Props {
  image: string
}

const StyledImg = styled("img")`
  max-height: 30px;
  margin-right: 65px;

  @media (min-width: ${theme("breakpoints.4")}) {
    max-height: 40px;
  }
`

export const PartnersItem = ({ image }: Props): ReactElement => (
  <StyledImg src={getImagePath(image, true)} alt="" />
)
