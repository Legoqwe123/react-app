import React, { ReactElement } from "react"
import { Box } from "../../ui/box"
import { HeaderContent } from "../../ui/header-content"
import { HeaderImage } from "./header-image"

export const Header = (): ReactElement => (
  <Box
    width={["auto", "auto", "auto", "auto", "auto", "801px"]}
    display={{ 5: "flex" }}
    height={{ 5: "584px" }}
  >
    <HeaderContent />

    <HeaderImage />
  </Box>
)
