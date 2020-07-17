import React, { ReactElement } from "react"
import { useMediaQuery } from "react-responsive"

import { Text } from "../../ui/text"
import { Box } from "../../ui/box"
import { theme } from "../../theme/theme"
import { t } from "../../i18n/i18n"
import { Button } from "../../ui/buttons/button"
import { HeaderImage } from "./header-image"
import { HashLink } from "react-router-hash-link"
import { comprehensiveCarAnchor } from "../../core/anchors"

export const HeaderLeft = (): ReactElement => {
  const isBigImg = !useMediaQuery({
    minWidth: theme("breakpoints.0"),
  })
  const isMobile = !useMediaQuery({
    minWidth: theme("breakpoints.1"),
  })

  return (
    <Box
      width={[
        "100%",
        "100%",
        "75%",
        "75%",
        "75%",
        "75%",
        theme("breakpoints.5"),
      ]}
      mx={{ 5: "auto" }}
      display="flex"
      flexDirection="column"
    >
      <Box
        ml={[0, 0, "60px", "60px", "186px"]}
        display={isMobile ? "flex" : "block"}
        flexDirection="column"
        alignItems="center"
      >
        <Text
          maxWidth={isMobile ? "100%" : "356px"}
          textAlign={isMobile ? "center" : "left"}
          color="primary"
          fontWeight="900"
          fontSize={isBigImg ? 6 : 8}
          lineHeight={isBigImg ? "32px" : "45px"}
          my={0}
          px={isMobile ? "45px" : 0}
        >
          {t("comprehensiveCar.title")}
        </Text>

        <Text
          textAlign={isMobile ? "center" : "left"}
          maxWidth={isMobile ? "100%" : "230px"}
          fontSize={4}
          lineHeight="34px"
          mt={isMobile ? "10px" : "14px"}
          mb={0}
          px={isMobile ? "70px" : 0}
        >
          {t("header.text")}
        </Text>

        {isMobile && (
          <HashLink to={comprehensiveCarAnchor}>
            <Button text={t("general.compare")} width="315px" mt="30px" />
          </HashLink>
        )}
      </Box>

      <HeaderImage isBigImg={isBigImg} />
    </Box>
  )
}
