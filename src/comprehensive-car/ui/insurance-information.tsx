import React, { ReactElement, useState } from "react"
import { useLocation } from "react-router-dom"
import { t } from "../../i18n/i18n"
import { theme } from "../../theme/theme"
import styled from "styled-components"
import { layout, fontWeight } from "styled-system"
import { v4 as uuid } from "uuid"

import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { SvgCar } from "../../ui/icons/car"
import { SvgPackage } from "../../ui/icons/package"
import { SvgOptions } from "../../ui/icons/options"
import { UserActions } from "../../ui/user-actions"
import { TypeInsuranceEnum, GtagFlowTypeEnum } from "../../core/enums"
import { comprehensiveCarCompanies } from "../routes"
import { Button } from "../../ui/buttons/button"
import { gtagFullDetails } from "../../core/gtag"

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
  align-items: flex-start;

  @media screen and (max-width: ${theme("breakpoints.2")}) {
    width: 100%;
  }

  ${layout}
`

const StyledText = styled(Text)`
  font-size: 14px;
  line-height: 22px;
  margin-left: ${(p): string => (p.ml ? String(p.ml) : "11px")};
  margin-bottom: 0px;
  margin-top: 0px;

  ${fontWeight}
`

export const getOptionText = (option: string): string => {
  switch (true) {
    case option.includes(
      t("comprehensiveCar.companies.personalAccidentInsurance"),
    ) ||
      option.includes(
        t("carLiability.results.personalInsurance", { 0: 1 }).split("x")[0],
      ):
      return t("informationForm.personalAccidentInsurance", { br: <br /> })
    case option === t("comprehensiveCar.carCivilLiabilityInsurance"):
      return t("informationForm.carLiability", {
        0: <br key={uuid()} />,
        1: <br key={uuid()} />,
        2: <br key={uuid()} />,
        3: <br key={uuid()} />,
      })
    case option === t("comprehensiveCar.voluntaryCivilLiabilityInsurance") ||
      option === t("carLiability.results.voluntaryInsurance"):
      return t("informationForm.voluntaryCivilLiabilityInsurance", {
        br: <br />,
      })
    default:
      return ""
  }
}

const getExtensionText = (extension: string): string => {
  return extension === "territoryVietnam"
    ? ""
    : t(`informationForm.${extension}`)
}

interface Props {
  isMobile: boolean
  desktopMarginX?: string | string[]
}

export const InsuranceInformation = ({
  isMobile,
  desktopMarginX,
}: Props): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location: any = useLocation()
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [isSentFullDetailsEvent, setIsSentFullDetailsEvent] = useState<boolean>(
    false,
  )

  const {
    brand = "",
    model = "",
    year = "",
    civilLiabilityInsurance = {},
    personalInsurance,
    voluntaryLiabilityInsurance,
    extendedTerms,
    deductible,
    companyName,
  } = location.state || {}

  const carInformation = brand + ", " + model + ", " + year

  const numberOfSeats = civilLiabilityInsurance.seats
    ? parseInt(civilLiabilityInsurance.seats) +
      " " +
      t("comprehensiveCar.companies.seats")
    : ""

  const personalInsuranceInformation = personalInsurance
    ? t("comprehensiveCar.companies.personalAccidentInsurance") +
      " x" +
      personalInsurance.numberOfParticipants
    : ""

  const voluntaryLiabilityInsuranceInfo = voluntaryLiabilityInsurance
    ? t("comprehensiveCar.voluntaryCivilLiabilityInsurance")
    : ""

  const civilLiabilityInsuranceInfo = civilLiabilityInsurance
    ? t("comprehensiveCar.carCivilLiabilityInsurance")
    : ""

  const options = [
    voluntaryLiabilityInsuranceInfo,
    civilLiabilityInsuranceInfo,
    personalInsuranceInformation,
  ].filter((item: string) => item !== "")

  const formattedExtendedTerms =
    extendedTerms && extendedTerms.length > 0
      ? extendedTerms
          .map((term: string): string => t(`comprehensiveCar.${term}`))
          .join(", ")
      : ""

  const handleClick = (): void => {
    if (!isSentFullDetailsEvent) {
      gtagFullDetails(GtagFlowTypeEnum.MPD)
      setIsSentFullDetailsEvent(true)
    }
    setIsCollapsed(!isCollapsed)
  }

  return (
    <Box bg="blues.4" py="15px" display="flex" flexWrap="wrap">
      {location.pathname === comprehensiveCarCompanies ? (
        <Box
          display="flex"
          mx={isMobile ? "30px" : desktopMarginX || "185px"}
          flexDirection={["column", "column", "row"]}
          width="100%"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            flexWrap="wrap"
            flexGrow="1"
          >
            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              flexWrap="wrap"
            >
              <StyledBox mb="10px" mr={isMobile ? 0 : "20px"}>
                <Box minWidth="15px">
                  <SvgCar />
                </Box>
                <Box display="flex" flexWrap="wrap">
                  <StyledText>{carInformation}</StyledText>
                  {numberOfSeats && <StyledText>{numberOfSeats}</StyledText>}
                </Box>
              </StyledBox>

              {formattedExtendedTerms && (
                <StyledBox mb={options && options.length > 0 ? "10px" : 0}>
                  <Box minWidth="15px">
                    <SvgPackage fill={theme("colors.primary")} />
                  </Box>
                  <StyledText>{formattedExtendedTerms}</StyledText>
                </StyledBox>
              )}
            </Box>

            {options && options.length > 0 && (
              <StyledBox width="100%" mb="0">
                <Box minWidth="15px">
                  <SvgOptions />
                </Box>
                <StyledText>{options.join(", ")}</StyledText>
              </StyledBox>
            )}
          </Box>
          <UserActions
            insurance={TypeInsuranceEnum.COMPREHENSIVE}
            minWidth="304px"
          />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          mx={isMobile ? "30px" : desktopMarginX || "185px"}
          fontSize="14px"
          width="100%"
        >
          <Box display="flex" flexDirection="column">
            <Box display="flex">
              <Box minWidth="15px">
                <SvgCar />
              </Box>
              <Text fontWeight="600" my={0} mb="10px" ml="11px">
                {t("informationForm.comprehensiveInsuranceBy", {
                  company: companyName,
                })}
              </Text>
            </Box>
            <Box ml="26px">
              <StyledBox mb="10px" fontWeight="600">
                <Box display="flex" flexWrap="wrap" my={0}>
                  <StyledText
                    my="0"
                    ml="0"
                  >{`${carInformation} ${numberOfSeats || ""}`}</StyledText>
                </Box>
              </StyledBox>
              <Text my={0} mb="10px" lineHeight="22px">
                {t("informationForm.MPDCoverage", {
                  0: <br key={uuid()} />,
                  1: <br key={uuid()} />,
                  2: <br key={uuid()} />,
                  3: <br key={uuid()} />,
                })}
              </Text>
              <Text my={0} mb="10px" lineHeight="22px">
                {t("informationForm.deductible", { 0: deductible })}
              </Text>
            </Box>
          </Box>

          {options &&
            options.length > 0 &&
            options.map(
              (option: string): ReactElement => (
                <Box display="flex" key={option} flexDirection="column">
                  <StyledBox width="100%" mb="10px">
                    <Box minWidth="15px" pt="4px">
                      <SvgOptions />
                    </Box>
                    <StyledText fontWeight="600" my="0">
                      {option}
                    </StyledText>
                  </StyledBox>
                  {isCollapsed && (
                    <Text my={0} mb="10px" lineHeight="22px" ml="26px">
                      {getOptionText(option)}
                    </Text>
                  )}
                </Box>
              ),
            )}

          {formattedExtendedTerms &&
            (isCollapsed ? (
              extendedTerms.map(
                (term: string): ReactElement => (
                  <Box display="flex" key={term} flexDirection="column">
                    <StyledBox
                      mb={options && options.length > 0 ? "10px" : 0}
                      fontWeight="600"
                    >
                      <Box minWidth="15px" pt="4px">
                        <SvgPackage fill={theme("colors.primary")} />
                      </Box>
                      <StyledText my="0">
                        {t(`comprehensiveCar.${term}`)}
                      </StyledText>
                    </StyledBox>
                    {getExtensionText(term) && (
                      <Text my={0} mb="10px" lineHeight="22px" ml="26px">
                        {getExtensionText(term)}
                      </Text>
                    )}
                  </Box>
                ),
              )
            ) : (
              <StyledBox
                mb={options && options.length > 0 ? "10px" : 0}
                fontWeight="600"
              >
                <Box minWidth="15px" pt="4px">
                  <SvgPackage fill={theme("colors.primary")} />
                </Box>
                <StyledText my="0">{formattedExtendedTerms}</StyledText>
              </StyledBox>
            ))}
          {((options && options.length > 0) ||
            (extendedTerms && extendedTerms.length > 0)) && (
            <Box
              display="flex"
              justifyContent={["center", "center", "flex-end"]}
            >
              <StyledButton
                text={t("informationForm.fullDetails")}
                variant="outline"
                onClick={handleClick}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
}
