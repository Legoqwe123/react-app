import React, { ReactElement } from "react"
import { menu } from "../menu"
import styled from "styled-components"
import { Text } from "./text"
import { theme } from "../theme/theme"
import { Box } from "./box"
import { Anchor } from "./anchor"

const NavListItem = styled(Text)`
  font-size: 14px;
  line-height: 44px;
  color: ${theme("colors.text.0")};
  cursor: pointer;
  margin: 0;

  @media (hover: hover) {
    :hover {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 1410px) {
    margin-left: 30px;
  }

  @media screen and (max-width: 1285px) {
    margin-left: 28px;
  }
`

export const HeaderNavList = (): ReactElement => (
  <Box display="flex">
    {menu.map(
      (item): ReactElement => (
        <Anchor to={item.route} key={item.name}>
          <NavListItem ml={[0, "15px", "15px", "58px", "58px", "54px", "58px"]}>
            {item.name}
          </NavListItem>
        </Anchor>
      ),
    )}
  </Box>
)
