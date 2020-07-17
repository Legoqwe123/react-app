import React, { ReactElement } from "react"
import { Box } from "../box"
import { theme } from "../../theme/theme"
import { Text } from "../text"
import { t } from "../../i18n/i18n"
import styled from "styled-components"
import { Anchor } from "../anchor"
import { terms, privacyPolicy } from "../../routes"

const StyledText = styled(Text)`
  color: white;
  text-align: center;
  margin: 0;
`

export const LeftNavFooter = (): ReactElement => (
  <Box
    borderTop={`${theme("borders.1")} ${theme("colors.greys.0")}`}
    px="36px"
    pt="30px"
    pb="45px"
  >
    <Box>
      <Anchor to={privacyPolicy} target="_blank">
        <StyledText cursor="pointer">{t("copyRight.privacyPolicy")}</StyledText>
      </Anchor>
    </Box>

    <Box my="11px">
      <Anchor to={terms} target="_blank">
        <StyledText my={0} cursor="pointer">
          {t("copyRight.termsAndConditions")}
        </StyledText>
      </Anchor>
    </Box>

    <StyledText>{t("copyRight.reserved")}</StyledText>
  </Box>
)
