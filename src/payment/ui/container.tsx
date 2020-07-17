import React, { ReactElement, ReactNode } from "react"
import { Box } from "../../ui/box"

interface Props {
  children: ReactElement | ReactNode
}

export const Container = ({ children }: Props): ReactElement => (
  <Box
    minWidth={["315px", "auto"]}
    width={["auto", "705px"]}
    mx="auto"
    mt={["20px", "40px"]}
    px={["30px", "30px", 0]}
  >
    {children}
  </Box>
)
