import React, { ReactElement } from "react"
import { Box } from "./box"
import { SvgShield } from "./icons/shield"
import styled from "styled-components"
import { theme } from "../theme/theme"
import { Text } from "./text"
import { SvgPerson } from "./icons/person"
import { SvgPackage } from "./icons/package"
import { t } from "../i18n/i18n"

const StyledText = styled(Text)`
  font-weight: bold;
  font-size: ${theme("fontSizes.0")}px;
  line-height: 26px;
  margin-left: 10px;
`

interface Props {
  years?: string
  packageName?: string
  company?: string
}

export const TariffCardHealthHeader = ({
  years,
  packageName,
  company,
}: Props): ReactElement => (
  <Box pl="20px" mt="10px" pb="6px">
    <Box display="flex" alignItems="center">
      <SvgShield />
      <StyledText my={0}>
        {t("tariffCard.comprehensiveHealthInsurance", { 0: company })}
      </StyledText>
    </Box>

    <Box display="flex" alignItems="center">
      <SvgPerson />
      <StyledText my="0">{t("tariffCard.years", { 0: years })}</StyledText>
    </Box>

    <Box display="flex" alignItems="center">
      <SvgPackage />
      <StyledText my={0}>{packageName}</StyledText>
    </Box>
  </Box>
)
