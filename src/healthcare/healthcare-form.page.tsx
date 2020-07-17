import React, { ReactElement } from "react"
import { useHistory } from "react-router-dom"
import get from "lodash/get"
import { healthcare } from "../routes"

import { Box } from "../ui/box"
import { HeaderInfoForm } from "../ui/header-info-form"
import { HealthcareInfoForm } from "./ui/healthcare-info-form"
import { healthCompanies } from "./routes"
import { useLocation } from "../hooks/use-location"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"
import { AdditionalInsuranceInfo } from "./ui/additional-insurance-info"

export const HealthcareFormPage = (): ReactElement => {
  const history = useHistory()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const state: any = history.location.state
  useLocation(state || {}, healthCompanies)
  useEmptyStateRedirect(healthcare)

  const nameInsurance = get(state, "nameInsurance", "")
  const years = get(state, "years", "")
  const packageName = get(state, "packageName", "")
  const options = get(state, "options", {})
  const total = get(state, "total", 0)

  return (
    <Box pb="100px">
      <HeaderInfoForm backRoute={healthCompanies} />

      <AdditionalInsuranceInfo
        options={options}
        packageName={packageName}
        years={years}
        nameInsurance={nameInsurance}
      />

      <HealthcareInfoForm total={total} />
    </Box>
  )
}
