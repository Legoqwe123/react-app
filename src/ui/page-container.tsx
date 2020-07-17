import React, { ReactElement, ReactNode } from "react"
import { Box } from "./box"

interface Props {
  children: ReactElement | ReactNode
}

export const PageContainer = ({ children }: Props): ReactElement => (
  <Box overflow="hidden">{children}</Box>
)
