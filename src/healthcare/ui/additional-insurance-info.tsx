import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import { useIntl } from "react-intl"

import { theme } from "../../theme/theme"
import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { SvgShield } from "../../ui/icons/shield"
import { SvgYearsOld } from "../../ui/icons/years-old"
import { SvgPackage } from "../../ui/icons/package"
import { SvgOptions } from "../../ui/icons/options"
import { t } from "../../i18n/i18n"
import { Button } from "../../ui/buttons/button"
import { layout, flex, fontWeight, space } from "styled-system"
import { getHealthInsuranceText } from "../health-insurance-info"
import { gtagFullDetails } from "../../core/gtag"
import { GtagFlowTypeEnum } from "../../core/enums"

const StyledButton = styled(Button)`
  background-color: transparent;
  font-size: ${theme("fontSizes.3")}px;
  font-weight: 300;
  min-width: 144px;
  padding-top: 0;
  padding-bottom: 0;
  &:hover {
    background-color: ${theme("colors.primary")};
    border-color: ${theme("colors.primary")};
    color: ${theme("colors.white")};
  }
`

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${theme("breakpoints.2")}) {
    width: 100%;
  }

  ${layout}
  ${flex}
  ${space}
`

const StyledText = styled(Text)`
  font-size: 14px;
  line-height: 22px;
  margin-left: 11px;
  margin-top: 0;
  margin-bottom: 0;

  ${fontWeight}
  ${space}
`

interface Props {
  nameInsurance: string
  years: string
  packageName: string
  options: string
}

export const AdditionalInsuranceInfo = ({
  nameInsurance,
  years,
  packageName,
  options,
}: Props): ReactElement => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [isSentFullDetailsEvent, setIsSentFullDetailsEvent] = useState<boolean>(
    false,
  )
  const { locale } = useIntl()

  const handleClick = (): void => {
    if (!isSentFullDetailsEvent) {
      gtagFullDetails(GtagFlowTypeEnum.HEALTH)
      setIsSentFullDetailsEvent(true)
    }
    setIsCollapsed(!isCollapsed)
  }

  return (
    <Box
      bg="blues.4"
      width="100%"
      display="flex"
      p={[
        "16px 37px 20px 37px",
        "16px 37px 20px 37px",
        "15px 37px 15px 37px",
        "15px 185px 15px 185px",
      ]}
      flexDirection="column"
    >
      <Box display="flex" flexWrap="wrap">
        <StyledBox mb="10px">
          <SvgShield fill={theme("colors.primary")} />
          <StyledText fontWeight="600">{nameInsurance}</StyledText>
        </StyledBox>

        <StyledBox mb="10px" ml={[0, 0, 0, "20px"]}>
          <SvgYearsOld />
          <StyledText fontWeight="600">{years}</StyledText>
        </StyledBox>

        <StyledBox mb="10px" ml={[0, 0, 0, "20px"]}>
          <SvgPackage fill={theme("colors.primary")} />
          <StyledText fontWeight="600">{packageName}</StyledText>
        </StyledBox>
      </Box>

      <Text mt={0} mb="10px" fontSize={1} lineHeight="22px">
        {t("informationForm.healthInfo")}
      </Text>

      {!isCollapsed ? (
        <StyledBox mb="10px">
          <SvgOptions />
          <StyledText fontWeight="600">
            {Object.keys(options).join(", ")}
          </StyledText>
        </StyledBox>
      ) : (
        Object.keys(options).map(
          (option: string): ReactElement => (
            <Box display="flex" key={option} flexDirection="column">
              <StyledBox mb="10px">
                <SvgOptions />
                <StyledText fontWeight="600">{option}</StyledText>
              </StyledBox>
              <Box ml="15px">
                {getHealthInsuranceText(locale, option) &&
                  getHealthInsuranceText(locale, option)
                    .split("\n")
                    .map(
                      (text: string): ReactElement => (
                        <StyledText key={text} mb="10px">
                          {text}
                        </StyledText>
                      ),
                    )}
              </Box>
            </Box>
          ),
        )
      )}

      {options && Object.keys(options).length > 0 && (
        <Box display="flex" justifyContent={["center", "center", "flex-end"]}>
          <StyledButton
            text={t("informationForm.fullDetails")}
            variant="outline"
            onClick={handleClick}
          />
        </Box>
      )}
    </Box>
  )
}
