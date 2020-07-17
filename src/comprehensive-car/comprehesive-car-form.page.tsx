import React, { ReactElement } from "react"
import { theme } from "../theme/theme"
import { useMediaQuery } from "react-responsive"

import { Box } from "../ui/box"
import { HeaderInfoForm } from "../ui/header-info-form"
import { InsuranceInformation } from "./ui/insurance-information"
import { CarInsuranceForm } from "../ui/car-insurance.form"
import { useHistory } from "react-router-dom"
import { comprehensiveCar } from "../routes"
import get from "lodash/get"
import { Container } from "../ui/container"
import { comprehensiveCarCompanies } from "../comprehensive-car/routes"
import { useLocation } from "../hooks/use-location"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"

export const ComprehensiveCarFormPage = (): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  const history = useHistory()

  const state = get(history, "location.state") || {}
  useLocation(state, comprehensiveCarCompanies)
  useEmptyStateRedirect(comprehensiveCar)

  return (
    <Box pb="100px">
      <HeaderInfoForm backRoute={comprehensiveCarCompanies} />

      <InsuranceInformation isMobile={isMobile} desktopMarginX="276px" />

      <Container>
        <CarInsuranceForm shouldShowIntegrityConfirmation />
      </Container>
    </Box>
  )
}
