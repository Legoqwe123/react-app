import React, { ReactElement } from "react"
import { t } from "../i18n/i18n"

import { StepHeader } from "../ui/step-header"
import { Box } from "../ui/box"
import { ComprehensiveCarInfoForm } from "./ui/comprehensive-car-info.form"

import { comprehensiveCar } from "../routes"
import { useHistory } from "react-router-dom"
import { useLocation } from "../hooks/use-location"
import get from "lodash/get"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"

export const ComprehensiveCarInfoPage = (): ReactElement => {
  const history = useHistory()
  const state = get(history, "location.state") || {}
  useLocation(state, comprehensiveCar)
  useEmptyStateRedirect(comprehensiveCar)

  console.log(state)

  return (
    <Box>
      <StepHeader
        title={t("main.carInsurance")}
        steps={[2, 6]}
        description={t("comprehensiveCar.information")}
        backRoute={comprehensiveCar}
      />

      <ComprehensiveCarInfoForm />
    </Box>
  )
}
