import React, { ReactElement } from "react"
import { t } from "../i18n/i18n"

import { StepHeader } from "../ui/step-header"
import { Box } from "../ui/box"
import { ExtendedTermsForm } from "./ui/extended-terms.form"
import { comprehensiveCarPrice } from "./routes"
import { useHistory } from "react-router-dom"
import get from "lodash/get"
import { useLocation } from "../hooks/use-location"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"
import { comprehensiveCar } from "../routes"

export const ComprehensiveCarExtendedTerms = (): ReactElement => {
  const history = useHistory()
  const state = get(history, "location.state") || {}
  useLocation(state, comprehensiveCarPrice)
  useEmptyStateRedirect(comprehensiveCar)

  return (
    <Box>
      <StepHeader
        title={t("main.carInsurance")}
        steps={[4, 6]}
        description={t("comprehensiveCar.extendedTerms")}
        backRoute={comprehensiveCarPrice}
      />
      <ExtendedTermsForm />
    </Box>
  )
}
