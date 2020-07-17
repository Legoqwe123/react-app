import React, { ReactElement } from "react"
import { Box } from "../box"
import { SvgLocation } from "../icons/location"

import { Text } from "../text"
import { t } from "../../i18n/i18n"
import { SvgEmail } from "../icons/email"
import { theme } from "../../theme/theme"

interface Props {
  isMobile: boolean
}

const textStyles = {
  mt: 0,
  mb: 0,
  ml: "20px",
  fontSize: 1,
  color: "text.0",
  lineHeight: ["25px", "25px", "25px", "25px", "24px"],
}

export const FooterFeed = ({ isMobile }: Props): ReactElement => (
  <Box
    borderTop={isMobile && `${theme("borders.1")} ${theme("colors.greys.0")}`}
    pl={isMobile && "36px"}
    pr={isMobile && "36px"}
    py={isMobile && "30px"}
    width={!isMobile ? "217px" : "auto"}
  >
    <Box display="flex">
      <SvgLocation />

      <Text {...textStyles}>{t("footer.location")}</Text>
    </Box>

    <Box display="flex" alignItems="center" mt={isMobile ? "15px" : "21px"}>
      <SvgEmail />

      <Text {...textStyles}>{t("footer.email")}</Text>
    </Box>
  </Box>
)
