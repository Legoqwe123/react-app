import React, { ReactElement } from "react"
import { getImagePath } from "../hooks/getImagePath"
import { Box } from "./box"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width: 177px;
  max-height: 30px;
`

export const Voucher = (): ReactElement => (
  <Box display="flex" justifyContent="center">
    <StyledImg src={getImagePath("voucher.png")} alt="" />
  </Box>
)
