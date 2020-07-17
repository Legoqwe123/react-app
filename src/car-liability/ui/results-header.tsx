import React, { ReactElement, useState } from "react"
import { t } from "../../i18n/i18n"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { HeaderFirstLine, getDesktopPurpose } from "./header-first-line"
import { HeaderSecondLine } from "./header-second-line"
import { UserActions } from "../../ui/user-actions"
import { TypeInsuranceEnum, GtagFlowTypeEnum } from "../../core/enums"
import { useLocation } from "react-router-dom"
import { results } from "../routes"
import { SvgCar } from "../../ui/icons/car"
import { getOptionText } from "../../comprehensive-car/ui/insurance-information"
import { theme } from "../../theme/theme"
import { Button } from "../../ui/buttons/button"
import { fontWeight, layout } from "styled-system"
import { SvgOptions } from "../../ui/icons/options"
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

interface Props {
  purpose: string | undefined
  seats: string | undefined
  personalNumber: string | undefined
  voluntaryLiabilityInsurance: string | undefined
  tonnage: string | undefined
}

export const ResultsHeader = ({
  purpose,
  seats,
  personalNumber,
  voluntaryLiabilityInsurance,
  tonnage,
}: Props): ReactElement => {
  const location = useLocation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const state: any = location.state
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [isSentFullDetailsEvent, setIsSentFullDetailsEvent] = useState<boolean>(
    false,
  )

  const companyName = (state && state.companyName) || ""

  const personalInsurance = personalNumber
    ? t("carLiability.results.personalInsurance", {
        0: personalNumber,
      })
    : ""

  const voluntaryInsurance = voluntaryLiabilityInsurance
    ? t("carLiability.results.voluntaryInsurance")
    : ""

  const numberOfSeats = seats
    ? t("carLiability.results.numberOfSeats", { 0: seats })
    : undefined

  const handleClick = (): void => {
    if (!isSentFullDetailsEvent) {
      gtagFullDetails(GtagFlowTypeEnum.MTPL)
      setIsSentFullDetailsEvent(true)
    }

    setIsCollapsed(!isCollapsed)
  }

  return (
    <Box
      display="flex"
      flexDirection={[
        "column",
        "column",
        location.pathname === results ? "row" : "column",
      ]}
      mb={["8px", "8px", "10px"]}
      p={[
        "16px 37px 20px 37px",
        "16px 37px 20px 37px",
        "15px 37px 15px 37px",
        "15px 185px 15px 185px",
      ]}
      bg="blues.4"
    >
      {location.pathname === results ? (
        <>
          <Box
            display={["block", "block", "flex"]}
            flexGrow="1"
            alignItems="center"
            flexWrap="wrap"
          >
            <HeaderFirstLine
              purpose={purpose}
              numberOfSeats={numberOfSeats}
              tonnage={tonnage}
            />

            {(personalInsurance || voluntaryInsurance) && (
              <HeaderSecondLine
                personalInsurance={personalInsurance}
                voluntaryInsurance={voluntaryInsurance}
              />
            )}
          </Box>
          <UserActions insurance={TypeInsuranceEnum.LIABILITY} />
        </>
      ) : (
        <Box display="flex" flexDirection="column" fontSize="14px">
          <Box display="flex" flexDirection="column">
            <Box display="flex">
              <Box minWidth="15px">
                <SvgCar />
              </Box>
              <Text fontWeight="600" my={0} mb="10px" ml="11px">
                {t("informationForm.liabilityInsuranceBy", {
                  company: companyName,
                })}
              </Text>
            </Box>
            <Box ml="26px">
              <StyledBox mb="10px" fontWeight="600">
                <Box flexWrap="wrap" my={0} display={["flex", "flex", "none"]}>
                  <StyledText my="0" ml="0">
                    {t(`carLiability.${purpose}`)} {numberOfSeats || tonnage}
                  </StyledText>
                </Box>
                <Box flexWrap="wrap" my={0} display={["none", "none", "flex"]}>
                  <StyledText my="0" ml="0">
                    {`${getDesktopPurpose(purpose)} `}{" "}
                    {numberOfSeats || tonnage}
                  </StyledText>
                </Box>
              </StyledBox>
              <Text my={0} mb="10px" lineHeight="22px">
                {t("informationForm.carLiability", {
                  0: <br key={uuid()} />,
                  1: <br key={uuid()} />,
                  2: <br key={uuid()} />,
                })}
              </Text>
            </Box>
          </Box>
          {voluntaryInsurance && (
            <Box display="flex" key={voluntaryInsurance} flexDirection="column">
              <StyledBox width="100%" mb="10px">
                <Box minWidth="15px" pt="4px">
                  <SvgOptions />
                </Box>
                <StyledText fontWeight="600" my="0">
                  {voluntaryInsurance}
                </StyledText>
              </StyledBox>
              {isCollapsed && (
                <Text my={0} mb="10px" lineHeight="22px" ml="26px">
                  {getOptionText(voluntaryInsurance)}
                </Text>
              )}
            </Box>
          )}
          {personalInsurance && (
            <Box display="flex" key={personalInsurance} flexDirection="column">
              <StyledBox width="100%" mb="10px">
                <Box minWidth="15px" pt="4px">
                  <SvgOptions />
                </Box>
                <StyledText fontWeight="600" my="0">
                  {personalInsurance}
                </StyledText>
              </StyledBox>
              {isCollapsed && (
                <Text my={0} mb="10px" lineHeight="22px" ml="26px">
                  {getOptionText(personalInsurance)}
                </Text>
              )}
            </Box>
          )}
          {(voluntaryInsurance || personalInsurance) && (
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
