import React, { ReactElement } from "react"
import { Formik, FormikProps, FormikValues } from "formik"
import { CarLiabilityInsurance } from "../../core/index"
import { ComprehensiveAdditionalInsurancesSchema } from "../../validation-schema/comprehensive-additional-insurances.schema"
import { useHistory, useLocation } from "react-router-dom"
import { personalAccidentInsurance } from "../routes"

import { AdditionalInsurancesView } from "./additional-insurances.view"
import { gtagMPDAdditionalInsurance } from "../../core/gtag"

export type AdditionalComprehensiveProps = CarLiabilityInsurance & {
  carLiabilityInsurance: boolean
  voluntaryLiabilityInsurance: boolean
  voluntaryLiabilityCoverage: string
}

export const AdditionalInsurancesForm = (): ReactElement => {
  const history = useHistory()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location: any = useLocation()
  const state = location.state

  const initialValues: AdditionalComprehensiveProps = {
    carLiabilityInsurance:
      state && state.civilLiabilityInsurance
        ? Boolean(state.civilLiabilityInsurance)
        : false,
    purpose:
      state &&
      (state.voluntaryLiabilityInsurance || state.civilLiabilityInsurance)
        ? state.civilLiabilityInsurance.purpose ||
          state.voluntaryLiabilityInsurance.purpose
        : "",
    seats:
      state &&
      (state.voluntaryLiabilityInsurance || state.civilLiabilityInsurance)
        ? state.civilLiabilityInsurance.seats ||
          state.voluntaryLiabilityInsurance.seats
        : "",
    tonnage:
      state &&
      (state.voluntaryLiabilityInsurance || state.civilLiabilityInsurance)
        ? state.civilLiabilityInsurance.tonnage ||
          state.voluntaryLiabilityInsurance.tonnage
        : "",
    voluntaryLiabilityInsurance:
      state && state.voluntaryLiabilityInsurance
        ? Boolean(state.voluntaryLiabilityInsurance)
        : false,
    voluntaryLiabilityCoverage:
      state && state.voluntaryLiabilityInsurance
        ? state.voluntaryLiabilityInsurance.voluntaryLiabilityCoverage
        : "",
  }

  const handleSubmit = ({
    purpose,
    seats,
    tonnage,
    voluntaryLiabilityCoverage,
    ...values
  }: FormikValues): void => {
    gtagMPDAdditionalInsurance()

    const civilLiabilityInsurance = values.carLiabilityInsurance
      ? { purpose, seats, tonnage }
      : false

    const voluntaryLiabilityInsurance = values.voluntaryLiabilityInsurance
      ? { voluntaryLiabilityCoverage, purpose, seats, tonnage }
      : false

    history.push({
      pathname: personalAccidentInsurance,
      state: {
        ...state,
        civilLiabilityInsurance,
        voluntaryLiabilityInsurance,
      },
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={ComprehensiveAdditionalInsurancesSchema}
    >
      {(props: FormikProps<AdditionalComprehensiveProps>): ReactElement => (
        <AdditionalInsurancesView {...props} />
      )}
    </Formik>
  )
}
