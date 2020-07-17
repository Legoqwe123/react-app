import React, { ReactElement } from "react"
import { Box } from "../box"
import { Text } from "../text"
import { t } from "../../i18n/i18n"
import { theme } from "../../theme/theme"
import { terms, privacyPolicy } from "../../routes"
import { Anchor } from "../anchor"

interface Props {
  isMobile: boolean
}

const textStyles = {
  fontSize: 1,
  lineHeight: ["25px", "25px", "25px", "25px", "24px"],
  color: "text.0",
}

export const FooterPrivacyPolicy = ({ isMobile }: Props): ReactElement => {
  const textAlign = isMobile ? "center" : "right"

  return (
    <Box
      borderTop={isMobile && `${theme("borders.1")} ${theme("colors.greys.0")}`}
      p={isMobile && "30px 36px"}
      display="flex"
      flexDirection="column"
    >
      <Box order={isMobile ? 0 : 2} my={!isMobile ? "22px" : 0}>
        <Anchor to={privacyPolicy} target="_blank">
          <Text textAlign={textAlign} cursor="pointer" my={0} {...textStyles}>
            {t("copyRight.privacyPolicy")}
          </Text>
        </Anchor>
      </Box>

      <Box order={isMobile ? 0 : 3} my={isMobile ? "11px" : 0}>
        <Anchor to={terms} target="_blank">
          <Text textAlign={textAlign} cursor="pointer" my={0} {...textStyles}>
            {t("copyRight.termsAndConditions")}
          </Text>
        </Anchor>
      </Box>

      <Text
        textAlign={textAlign}
        order={isMobile ? 0 : 1}
        my={0}
        {...textStyles}
      >
        {t("copyRight.reserved")}
      </Text>
    </Box>
  )
}
