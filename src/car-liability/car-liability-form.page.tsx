import React, { ReactElement } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import get from "lodash/get"
import { carLiability } from "../routes"

import { Box } from "../ui/box"
import { SecondStepHeader } from "./ui/second-step-header"
import { ResultsHeader } from "./ui/results-header"
import { CarInsuranceForm } from "../ui/car-insurance.form"
import { Container } from "../ui/container"
import { results } from "./routes"
import { useLocation } from "../hooks/use-location"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"

export interface CarLiabilityValues {
  date?: string
  owner?: string
  number?: string
  city?: string
  address?: string
  deliveryAddress?: string
  email?: string
  phone?: string
}

const CarLiabilityFormPageView = ({
  history,
}: RouteComponentProps): ReactElement => {
  const state = get(history, "location.state") || {}
  useLocation(state, results)

  const {
    purpose,
    seats,
    voluntaryLiabilityInsurance,
    tonnage,
    personalInsurance,
  } = state

  useEmptyStateRedirect(carLiability)

  return (
    <Box>
      <SecondStepHeader
        boxProps={{ borderBottom: "none", pb: ["29px", "29px", "25px"] }}
        title="carLiability.form.title"
        text=""
        backRoute={results}
      />

      <ResultsHeader
        purpose={purpose}
        seats={seats || 0}
        personalNumber={
          personalInsurance ? personalInsurance.personalNumber : ""
        }
        voluntaryLiabilityInsurance={voluntaryLiabilityInsurance}
        tonnage={tonnage}
      />

      <Container>
        <CarInsuranceForm />
      </Container>
    </Box>
  )
}

export const CarLiabilityFormPage = withRouter(CarLiabilityFormPageView)
