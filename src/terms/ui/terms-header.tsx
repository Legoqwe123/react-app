import React, { ReactElement } from "react"

import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { Button } from "../../ui/buttons/button"

import { TermsHeaderImage } from "./terms-header-image"

interface Props {
  title: string
  lastUpdate: string
  buttonText: string
  handleClick: () => void
}

export const TermsHeader = ({
  title,
  lastUpdate,
  buttonText,
  handleClick,
}: Props): ReactElement => (
  <Box
    display="flex"
    mt={["20px", "20px", "20px", "136px"]}
    flexDirection={["column", "row"]}
    position={["static", "relative"]}
    height={["auto", "440px", "460px"]}
  >
    <Box
      pl={["30px", "70px", "189px"]}
      pr={["30px", 0]}
      pt={[0, 0, 0, "78px"]}
      width={["auto", "auto", "584px"]}
    >
      <Text
        fontWeight="900"
        fontSize={[6, 8]}
        lineHeight={["32px", "32px", "45px"]}
        textAlign={["center", "left"]}
        color="primary"
        my={0}
      >
        {title}
      </Text>

      <Text
        fontSize={4}
        textAlign={["center", "left"]}
        lineHeight="34px"
        color="text.1"
        mb="28px"
        mt="8px"
      >
        {lastUpdate}
      </Text>

      <Button
        variant="outline"
        width={["100%", "180px"]}
        display={["none", "none", "block"]}
        py="8px"
        mb="11px"
        text={buttonText}
        onClick={handleClick}
      />
    </Box>

    <TermsHeaderImage />
  </Box>
)
