import React, { ReactElement } from "react"
import { t } from "../i18n/i18n"

import { StepHeader } from "../ui/step-header"
import { Box } from "../ui/box"
import { ComprehensiveCarPriceForm } from "./ui/comprehensive-car-price.form"
import { comprehensiveCarInformation } from "./routes"
import { comprehensiveCar } from "../routes"
import { useHistory } from "react-router-dom"
import { useLocation } from "../hooks/use-location"
import get from "lodash/get"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"

export const ComprehensiveCarPricePage = (): ReactElement => {
  const history = useHistory()
  const state = get(history, "location.state") || {}
  useLocation(state, comprehensiveCarInformation)
  useEmptyStateRedirect(comprehensiveCar)

  console.log(state)

  return (
    <Box>
      <StepHeader
        title={t("main.carInsurance")}
        steps={[3, 6]}
        description={t("comprehensiveCar.sumInsured")}
        backRoute={comprehensiveCarInformation}
      />

      <ComprehensiveCarPriceForm />
    </Box>
  )
}
