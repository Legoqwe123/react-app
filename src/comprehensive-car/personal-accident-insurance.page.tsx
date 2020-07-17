import React, { ReactElement } from "react"

import { Box } from "../ui/box"
import { StepHeader } from "../ui/step-header"
import { t } from "../i18n/i18n"
import { PersonalInsuranceForm } from "./ui/personal-insurance.form"
import { comprehensiveCarAdditionalInsurances } from "./routes"
import { useHistory } from "react-router-dom"
import get from "lodash/get"
import { useLocation } from "../hooks/use-location"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"
import { comprehensiveCar } from "../routes"

export const PersonalAccidentInsurancePage = (): ReactElement => {
  const history = useHistory()
  const state = get(history, "location.state") || {}
  useLocation(state, comprehensiveCarAdditionalInsurances)
  useEmptyStateRedirect(comprehensiveCar)

  return (
    <Box>
      <StepHeader
        title={t("main.carInsurance")}
        steps={[6, 6]}
        description={t("comprehensiveCar.sumInsured")}
        backRoute={comprehensiveCarAdditionalInsurances}
      />
      <PersonalInsuranceForm />
    </Box>
  )
}
