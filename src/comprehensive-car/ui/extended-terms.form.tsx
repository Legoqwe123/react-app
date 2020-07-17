/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from "react"
import { Formik, FormikProps } from "formik"
import { useHistory, useLocation } from "react-router-dom"
import { comprehensiveCarAdditionalInsurances } from "../routes"

import { ExtendedTermsView } from "./extended-terms.view"
import { gtagMPDExtendedTerms } from "../../core/gtag"

export interface ExtendedTermsTypes {
  newPlacements: boolean
  theftForParts: boolean
  waterDamage: boolean
  repairsInBrandedGarage: boolean
  specialModification: boolean
  territoryVietnam: boolean
}

export const ExtendedTermsForm = (): ReactElement => {
  const history = useHistory()
  const location: any = useLocation()
  const state = location.state

  const initialValues = {
    newPlacements:
      state && state.extendedTerms
        ? state.extendedTerms.includes("newPlacements")
        : false,
    theftForParts:
      state && state.extendedTerms
        ? state.extendedTerms.includes("theftForParts")
        : false,
    waterDamage:
      state && state.extendedTerms
        ? state.extendedTerms.includes("waterDamage")
        : false,
    repairsInBrandedGarage:
      state && state.extendedTerms
        ? state.extendedTerms.includes("repairsInBrandedGarage")
        : false,
    specialModification:
      state && state.extendedTerms
        ? state.extendedTerms.includes("specialModification")
        : false,
    territoryVietnam:
      state && state.extendedTerms
        ? state.extendedTerms.includes("territoryVietnam")
        : false,
  }

  const handleSubmit = (values: any): void => {
    const extendedTerms: string[] = []

    Object.keys(values).forEach((term): void => {
      if (values[term]) {
        extendedTerms.push(term)
      }
    })

    gtagMPDExtendedTerms(extendedTerms)

    history.push({
      pathname: comprehensiveCarAdditionalInsurances,
      state: { ...state, extendedTerms },
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(props: FormikProps<ExtendedTermsTypes>): ReactElement => (
        <ExtendedTermsView {...props} />
      )}
    </Formik>
  )
}
