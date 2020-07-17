import React, { ReactElement } from "react"
import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { HealthHeaderFields } from "./health-header-fields"
import { t } from "../../i18n/i18n"
import { healthcareFormId } from "../../core/anchors"

interface Props {
  isMobile: boolean
}

export const HealthHeaderForm = ({ isMobile }: Props): ReactElement => (
  <Box
    id={healthcareFormId}
    minWidth={isMobile ? "315px" : "340px"}
    maxWidth={isMobile ? "315px" : "340px"}
    mr={["auto", "auto", "60px", "187px"]}
    ml={isMobile ? "auto" : 0}
    mt={isMobile ? "30px" : 0}
    px={isMobile ? "5px" : 0}
  >
    <Text
      fontSize={isMobile ? 5 : "22px"}
      lineHeight={isMobile ? "32px" : "44px"}
      color={isMobile ? "primary" : "blacks.0"}
      fontWeight={isMobile ? "bold" : "normal"}
      textAlign={isMobile ? "center" : "left"}
      my={0}
    >
      {t("navigation.health")}
    </Text>

    <Text
      fontSize={3}
      mt={isMobile ? "52px" : "15px"}
      mb={isMobile ? "30px" : "24px"}
      lineHeight="34px"
      textAlign={isMobile ? "center" : "left"}
    >
      {t("health.titleRange")}
    </Text>

    <HealthHeaderFields isMobile={isMobile} />
  </Box>
)
