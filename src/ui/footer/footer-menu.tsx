import React, { ReactElement } from "react"
import { Box } from "../box"
import { menu } from "../../menu"
import { Anchor } from "../anchor"
import { Text } from "../text"

interface Props {
  isMobile: boolean
}

export const FooterMenu = ({ isMobile }: Props): ReactElement => (
  <Box
    display="flex"
    flexDirection="column"
    ml={isMobile ? "32px" : 0}
    mt={isMobile && "13px"}
    pb="11px"
  >
    {menu.map(
      (item): ReactElement => (
        <Anchor to={item.route} key={item.name}>
          <Text
            my={isMobile ? "7px" : "8px"}
            color="text.0"
            fontSize={1}
            fontWeight="bold"
            cursor="pointer"
            lineHeight={isMobile ? "32px" : "28px"}
          >
            {item.name}
          </Text>
        </Anchor>
      ),
    )}
  </Box>
)
