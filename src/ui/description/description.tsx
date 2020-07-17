import React, { ReactElement } from "react"

import { Box, BoxProps } from "../../ui/box"
import { DescriptionList } from "./description-list"
import { DescriptionImage } from "./description-image"

interface Props {
  boxProps?: BoxProps
}

export const Description = ({ boxProps }: Props): ReactElement => (
  <Box
    display="flex"
    flexDirection={["column", "column", "row-reverse"]}
    justifyContent={["center", "center", "flex-start"]}
    mt="50px"
    {...boxProps}
  >
    <DescriptionList />

    <DescriptionImage />
  </Box>
)
