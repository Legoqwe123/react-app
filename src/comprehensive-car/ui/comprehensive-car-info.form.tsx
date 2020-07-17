import React, { ReactElement } from "react"
import { Formik, FormikProps, FormikValues } from "formik"
import { useLocation, useHistory } from "react-router-dom"

import { FormInfoSchema } from "../../validation-schema/comprehensive-car-info.schema"
import { ComprehensiveCarInfoView } from "./comprehensive-car-info.view"
import { comprehensiveCarPrice } from "../routes"

export interface InfoFormType {
  owner: string
  number: string
  phone: string
}

export const ComprehensiveCarInfoForm = (): ReactElement => {
  const location = useLocation()
  const state: any = location.state

  const history = useHistory()

  const initalValues = {
    owner: state && state.owner ? state.owner : "",
    number: state && state.number ? state.number : "",
    phone: state && state.phone ? state.phone : "",
  }

  const handleSumbit = (values: FormikValues): void => {
    history.push({
      pathname: comprehensiveCarPrice,
      state: { ...state, ...values },
    })
  }

  return (
    <Formik
      onSubmit={handleSumbit}
      initialValues={initalValues}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={FormInfoSchema}
    >
      {(props: FormikProps<InfoFormType>): ReactElement => (
        <ComprehensiveCarInfoView {...props} />
      )}
    </Formik>
  )
}
