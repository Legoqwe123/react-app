import React, { ReactElement } from "react"
import { Box } from "../box"
import { Text } from "../text"
import { sidebarMenu } from "../../menu"
import { Anchor } from "../anchor"
import { Menu } from "../../core"

interface Props {
  close: () => void
}

export const LeftNavContent = ({ close }: Props): ReactElement => (
  <Box px="30px" pt="25px">
    {sidebarMenu.map((item: Menu) => (
      <Box width="fit-content" mr="auto" key={item.name}>
        <Anchor key={item.name} to={item.route}>
          <Text
            m={0}
            mt="40px"
            color="white"
            fontWeight="bold"
            boxSizing="border-box"
            lineHeight="29px"
            fontSize={5}
            cursor="pointer"
            onClick={close}
          >
            {item.name}
          </Text>
        </Anchor>
      </Box>
    ))}
  </Box>
)
