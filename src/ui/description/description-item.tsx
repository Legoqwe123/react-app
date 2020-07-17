import React, { ReactElement } from "react"
import styled from "styled-components"
import { t } from "../../i18n/i18n"
import { theme } from "../../theme/theme"

import { Box, BoxProps } from "../../ui/box"
import { Text } from "../../ui/text"

export interface Item {
  src: string
  text: string
  containerProps?: BoxProps
}

const StyledImg = styled.img<{ src: string }>`
  height: 120px;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${theme("breakpoints.1")}) {
    height: 89px;
    margin-right: 20px;
    margin-left: 0;
  }
`

export const DescriptionItem = ({
  src,
  text,
  containerProps,
}: Item): ReactElement => (
  <Box
    display="flex"
    flexDirection={["column", "column", "row"]}
    alignItems="center"
    {...containerProps}
    marginBottom={[0, 0, "49px"]}
  >
    <StyledImg src={src} />
    <Text
      mt={["20px", "20px", 0]}
      mb={["30px", "30px", 0]}
      mx={["auto", "auto", 0]}
      maxWidth={["231px", "231px", "148px"]}
      fontWeight="700"
      fontSize="16px"
      lineHeight={["22px", "22px", "19px"]}
      textAlign={["center", "center", "left"]}
      color="primary"
    >
      {t(text, { 0: <Box as="br" key="br1" />, 1: <Box as="br" key="br2" /> })}
    </Text>
  </Box>
)
