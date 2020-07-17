import React, { ReactElement } from "react"
import { Box } from "./box"
import { Text } from "./text"
import { Button } from "./buttons/button"
import { t } from "../i18n/i18n"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"
import { HashLink } from "react-router-hash-link"
import { liabilityFormAnchor } from "../core/anchors"

export const HeaderContent = (): ReactElement => {
  const isNotMobile = useMediaQuery({ minWidth: theme("breakpoints.1") })

  return (
    <Box
      pl={["24px", "24px", "189px"]}
      pr={["24px", "24px", 0]}
      pt={["5px", "5px", "35px"]}
      width={["auto", "auto", "584px"]}
      textAlign={["center", "center", null]}
    >
      <Text
        fontWeight="900"
        fontSize={[6, 8]}
        lineHeight={["32px", "32px", "45px"]}
        textAlign={["center", "center", "left"]}
        color="primary"
        mb="11px"
        width={["auto", "auto", "334px"]}
      >
        {t("header.carLiabilityTitle")}
      </Text>
      <Text
        fontSize={4}
        textAlign={["center", "center", "left"]}
        lineHeight="34px"
        color="text.1"
        mt="11px"
        mb="28px"
        width={["auto", "auto", "265px"]}
      >
        {t("header.text")}
      </Text>

      {!isNotMobile && (
        <HashLink to={liabilityFormAnchor}>
          <Button
            variant="primary"
            width={["100%", "171px"]}
            py="8px"
            mb="11px"
            text={t("header.carLiabilityAction")}
            maxWidth={["300px", "171px"]}
            mx={["auto", 0]}
          />
        </HashLink>
      )}
    </Box>
  )
}
