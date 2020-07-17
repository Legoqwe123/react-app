import React, { ReactElement } from "react"

import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { Button } from "../../ui/buttons/button"
import { HeaderImage } from "./header-image"

import { t } from "../../i18n/i18n"

import { HashLink } from "react-router-hash-link"
import { insuranceCardsAnchor } from "../../core/anchors"
import { theme } from "../../theme/theme"

export const Header = (): ReactElement => (
  <Box
    display="flex"
    flexDirection={["column", "row"]}
    position={[
      "static",
      "relative",
      "relative",
      "relative",
      "relative",
      "relative",
      "unset",
    ]}
    height={["auto", "440px", "600px"]}
    width={{ 5: theme("breakpoints.5") }}
    mx="auto"
  >
    <Box
      pl={["30px", "70px", "189px"]}
      pr={["30px", 0]}
      pt={["5px", "5px", "69px"]}
      width={["auto", "auto", "584px"]}
    >
      <Text
        fontWeight="900"
        fontSize={[6, 8]}
        lineHeight={["32px", "32px", "45px"]}
        textAlign={["center", "left"]}
        color="primary"
        mb="11px"
      >
        {t("header.title")}
      </Text>
      <Text
        fontSize={4}
        textAlign={["center", "left"]}
        lineHeight="34px"
        color="text.1"
        mt="11px"
        mb="28px"
      >
        {t("header.text")}
      </Text>

      <HashLink to={insuranceCardsAnchor}>
        <Button
          variant="primary"
          width={["100%", "171px"]}
          py="8px"
          mb="11px"
          text={t("header.action")}
        />
      </HashLink>
    </Box>

    <HeaderImage />
  </Box>
)
