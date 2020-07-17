import React, { ReactElement } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { theme } from "../theme/theme"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme("colors.text.0")};
`

interface Props {
  to: string
  target?: string
  children: ReactElement | string
}

export const Anchor = ({ to, target, children }: Props): ReactElement => (
  <StyledLink to={to} target={target}>
    {children}
  </StyledLink>
)
