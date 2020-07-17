import React, { ReactElement } from "react"
import { t } from "../i18n/i18n"

import { Box } from "../ui/box"
import { StepHeader } from "../ui/step-header"
import { AdditionalInsurancesForm } from "./ui/additional-insurances.form"
import { comprehensiveCarExtendedTerms } from "./routes"
import { useHistory } from "react-router-dom"
import get from "lodash/get"
import { useLocation } from "../hooks/use-location"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"
import { comprehensiveCar } from "../routes"

export const ComprehensiveCarAdditionalInsurancesPage = (): ReactElement => {
  const history = useHistory()
  const state = get(history, "location.state") || {}
  useLocation(state, comprehensiveCarExtendedTerms)
  useEmptyStateRedirect(comprehensiveCar)

  return (
    <Box>
      <StepHeader
        title={t("main.carInsurance")}
        steps={[5, 6]}
        description={t("comprehensiveCar.additionalInsurances")}
        backRoute={comprehensiveCarExtendedTerms}
      />
      <AdditionalInsurancesForm />
    </Box>
  )
}
