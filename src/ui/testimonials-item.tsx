import React, { ReactElement } from "react"
import { Box } from "./box"
import { Text } from "./text"
import { SvgAvatar } from "./icons/avatar"
import { TestimonialsProps } from "../core"

export const TestimonialsItem = ({
  message,
  name,
  place,
}: TestimonialsProps): ReactElement => (
  <Box
    width={["315px", "315px", "344px"]}
    maxWidth={["315px", "315px", "344px"]}
    height="340px"
    borderRadius="15px"
    boxShadow="card"
    p="30px"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <Text>{message}</Text>

    <Box display="flex" alignItems="center">
      <SvgAvatar />

      <Box ml="16px">
        <Text fontSize={4} my={0}>
          {name}
        </Text>
        <Text my={0} fontSize={1}>
          {place}
        </Text>
      </Box>
    </Box>
  </Box>
)
