import React, { ReactElement } from "react"
import { theme } from "../../theme/theme"
import { Box, BoxProps } from "../box"

export const HorizontalLine = (styles: BoxProps): ReactElement => (
  <Box
    borderTop={`${theme("borders.1")} ${theme("colors.greys.0")}`}
    {...styles}
  />
)
