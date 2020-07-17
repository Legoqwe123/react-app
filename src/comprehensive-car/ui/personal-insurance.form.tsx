import React, { ReactElement } from "react"
import { Formik, FormikProps } from "formik"
import { PersonalAccidentInsuranceSchema } from "../../validation-schema/personal-accident-insurance.schema"
import { useHistory, useLocation } from "react-router-dom"
import { comprehensiveCarCompanies } from "../routes"

import { PersonalInsuranceView } from "./personal-insurance.view"
import { gtagMPDPersonalInsurance } from "../../core/gtag"

export interface PersonalInsuranceValues {
  personalInsurance: boolean
  personalInsuranceCoverage: string
  numberOfParticipants: string
}

export const PersonalInsuranceForm = (): ReactElement => {
  const history = useHistory()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location: any = useLocation()
  const state = location.state

  const initialValues = {
    personalInsurance:
      state && state.personalInsurance
        ? Boolean(state.personalInsurance)
        : false,
    personalInsuranceCoverage:
      state && state.personalInsurance
        ? state.personalInsurance.personalInsuranceCoverage
        : "",
    numberOfParticipants:
      state && state.personalInsurance
        ? state.personalInsurance.numberOfParticipants
        : "",
  }

  const handleSubmit = ({
    numberOfParticipants,
    personalInsuranceCoverage,
    ...values
  }: PersonalInsuranceValues): void => {
    gtagMPDPersonalInsurance(
      !!state.civilLiabilityInsurance,
      values.personalInsurance,
      !!state.voluntaryLiabilityInsurance,
    )

    const personalInsurance = values.personalInsurance
      ? { personalInsuranceCoverage, numberOfParticipants }
      : false

    history.push({
      pathname: comprehensiveCarCompanies,
      state: {
        ...state,
        personalInsurance,
      },
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={PersonalAccidentInsuranceSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<PersonalInsuranceValues>): ReactElement => (
        <PersonalInsuranceView {...props} />
      )}
    </Formik>
  )
}
