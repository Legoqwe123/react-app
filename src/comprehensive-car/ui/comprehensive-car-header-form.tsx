import React, { ReactElement } from "react"
import { Formik, FormikProps } from "formik"
import { useHistory } from "react-router-dom"

import { ComprehensiveCarHeaderView } from "./comprehensive-car-header-view"
import { ComprehensiveCarHeaderSchema } from "../../validation-schema/comprehensive-car-header.schema"
import { comprehensiveCarInformation } from "../routes"
import { gtagMPDCarBrand } from "../../core/gtag"

interface Props {
  banScrollTo?: boolean
}

export interface ComprehensiveCarHeaderProps {
  brand: string
  model: string
  year: string
}

export const ComprehensiveCarHeaderForm = ({
  banScrollTo,
}: Props): ReactElement => {
  const initialValues: ComprehensiveCarHeaderProps = {
    brand: "",
    model: "",
    year: "",
  }

  const history = useHistory()

  const handleSubmit = (values: ComprehensiveCarHeaderProps): void => {
    const { brand, model, year } = values

    gtagMPDCarBrand(brand)

    history.push({
      pathname: comprehensiveCarInformation,
      state: { brand, model, year },
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={ComprehensiveCarHeaderSchema}
      component={(
        formikBag: FormikProps<ComprehensiveCarHeaderProps>,
      ): ReactElement => (
        <ComprehensiveCarHeaderView banScrollTo={banScrollTo} {...formikBag} />
      )}
    />
  )
}
