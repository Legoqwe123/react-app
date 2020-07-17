import React, { ReactElement, ReactNode } from "react"
import { Box } from "./box"
import { theme } from "../theme/theme"

interface Props {
  children: ReactNode
}

export const Container = ({ children }: Props): ReactElement => (
  <Box mx={{ 5: "auto" }} width={{ 5: theme("breakpoints.5") }}>
    {children}
  </Box>
)
