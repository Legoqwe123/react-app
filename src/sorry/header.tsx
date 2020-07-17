import React, { ReactElement } from "react"
import { Box } from "../ui/box"
import { HeaderLeftSide } from "./ui/header-left-side"

export const Header = ({ isMobile }: { isMobile: boolean }): ReactElement => (
  <Box
    display="flex"
    justifyContent="space-between"
    mt={isMobile ? "10px" : "130px"}
  >
    <HeaderLeftSide isMobile={isMobile} />
  </Box>
)
