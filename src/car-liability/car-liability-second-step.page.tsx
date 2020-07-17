import React, { ReactElement } from "react"
import { Formik } from "formik"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { results } from "./routes"
import { carLiability } from "../routes"
import { CarLiabilitysecondStepSchema } from "../validation-schema/car-liability-second-step.schema"

import { Box } from "../ui/box"
import { SecondStepHeader } from "./ui/second-step-header"
import { SecondStepForm, Step2Values } from "./ui/second-step-form"
import { Container } from "../ui/container"
import { gtagMTPLResult } from "../core/gtag"
import { useLocation } from "../hooks/use-location"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"

const CarLiabilitySecondStepPageView = ({
  history,
}: RouteComponentProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const state: any = history.location.state || {}
  useLocation(state, carLiability)
  useEmptyStateRedirect(carLiability)

  const initialValues = {
    personal:
      state &&
      state.personalInsurance &&
      state.personalInsurance.personalInsuranceCoverage
        ? true
        : false,
    personalInsuranceCoverage:
      state && state.personalInsurance
        ? state.personalInsurance.personalInsuranceCoverage
        : undefined,
    personalNumber:
      state && state.personalInsurance
        ? state.personalInsurance.personalNumber
        : undefined,
    voluntary: state && state.voluntaryLiabilityInsurance ? true : false,
    voluntaryLiabilityInsurance:
      state && state.voluntaryLiabilityInsurance
        ? state.voluntaryLiabilityInsurance.voluntaryLiabilityCoverage
        : undefined,
  }

  const onSubmit = (values: Step2Values): void => {
    gtagMTPLResult(values.personal, values.voluntary)

    history.push({
      pathname: results,
      state: {
        ...state,
        voluntaryLiabilityInsurance: values.voluntaryLiabilityInsurance
          ? {
              voluntaryLiabilityCoverage: values.voluntaryLiabilityInsurance,
            }
          : false,
        personalInsurance: {
          personalInsuranceCoverage: values.personalInsuranceCoverage,
          personalNumber: values.personalNumber,
        },
      },
    })
  }

  return (
    <Box minHeight="100vh">
      <SecondStepHeader backRoute={carLiability} />

      <Container>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={CarLiabilitysecondStepSchema}
          component={SecondStepForm}
        />
      </Container>
    </Box>
  )
}

export const CarLiabilitySecondStepPage = withRouter(
  CarLiabilitySecondStepPageView,
)
