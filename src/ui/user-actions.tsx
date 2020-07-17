import React, { ReactElement } from "react"
import { TypeInsuranceEnum, GtagFlowTypeEnum } from "../core/enums"
import { Box, BoxProps } from "./box"
import { Button } from "./buttons/button"
import styled from "styled-components"
import { theme } from "../theme/theme"
import { comprehensiveCar, carLiability, root, healthcare } from "../routes"
import { useHistory } from "react-router-dom"
import { secondStep } from "../car-liability/routes"
import { comprehensiveCarInformation } from "../comprehensive-car/routes"
import { t } from "../i18n/i18n"
import { gtagNewSearch, gtagEdit } from "../core/gtag"

type Props = BoxProps & {
  insurance: TypeInsuranceEnum
}

const StyledButton = styled(Button)`
  background-color: transparent;
  &:hover {
    background-color: ${theme("colors.primary")};
    border-color: ${theme("colors.primary")};
    color: ${theme("colors.white")};
  }
`

const getLinkToInsurancePage = (insurance: TypeInsuranceEnum): string => {
  switch (insurance) {
    case TypeInsuranceEnum.COMPREHENSIVE:
      return comprehensiveCar
    case TypeInsuranceEnum.HEALTH:
      return healthcare
    case TypeInsuranceEnum.LIABILITY:
      return carLiability
    default:
      return root
  }
}

const getLinkToFirstStep = (insurance: TypeInsuranceEnum): string => {
  switch (insurance) {
    case TypeInsuranceEnum.COMPREHENSIVE:
      return comprehensiveCarInformation
    case TypeInsuranceEnum.HEALTH:
      return healthcare
    case TypeInsuranceEnum.LIABILITY:
      return secondStep
    default:
      return root
  }
}

const getGtagFlow = (insurance: TypeInsuranceEnum): GtagFlowTypeEnum => {
  switch (insurance) {
    case TypeInsuranceEnum.COMPREHENSIVE:
      return GtagFlowTypeEnum.MPD
    case TypeInsuranceEnum.HEALTH:
      return GtagFlowTypeEnum.HEALTH
    case TypeInsuranceEnum.LIABILITY:
      return GtagFlowTypeEnum.MTPL
    default:
      return GtagFlowTypeEnum.MTPL
  }
}

export const UserActions = ({ insurance, ...rest }: Props): ReactElement => {
  const history = useHistory()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locationState: any = history.location.state
  const isHealth = insurance === TypeInsuranceEnum.HEALTH
  const flow = getGtagFlow(insurance)

  const handleNewSearchButtonClick = (): void => {
    const path = getLinkToInsurancePage(insurance)
    gtagNewSearch(flow)
    history.push({ pathname: path })
  }

  const handleEditButtonClick = (): void => {
    const path = getLinkToFirstStep(insurance)
    gtagEdit(flow)
    history.push({ pathname: path, state: { ...locationState } })
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      alignSelf={["center", "center", "unset"]}
      mt={["20px", "20px", "8px"]}
      mb={[0, 0, "8px"]}
      {...rest}
    >
      {!isHealth && (
        <StyledButton
          text={t("general.edit")}
          variant="outline"
          minWidth="144px"
          maxHeight="39px"
          mr="21px"
          fontSize={3}
          fontWeight="normal"
          p={0}
          onClick={handleEditButtonClick}
        />
      )}

      <StyledButton
        text={t("general.newSearch")}
        variant="outline"
        minWidth="144px"
        maxHeight="39px"
        fontSize={3}
        fontWeight="normal"
        p={0}
        onClick={handleNewSearchButtonClick}
      />
    </Box>
  )
}
