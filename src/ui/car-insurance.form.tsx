import React, { ReactElement, Fragment } from "react"
import { Formik, FormikHelpers, FormikProps } from "formik"
import { getPhoneNumber } from "../core/utils"
import { t } from "../i18n/i18n"
import { withRouter, RouteComponentProps } from "react-router-dom"
import get from "lodash/get"
import { FormTotal } from "./form-total"
import { CarInsuranceSchema } from "../validation-schema/car-insurance.schema"
import { CarInsuranceFormContent } from "./car-insurance-form-content"
import { payment } from "../routes"
import { getNowDate } from "../core/get-now-date"
import { isSafari } from "../core/is-safari"
import { GtagFlowTypeEnum } from "../core/enums"
import { analyticsFillInfo } from "../core/analytics-events"
import { InformationFormNote } from "./information-form-note"

type Props = RouteComponentProps & {
  shouldShowIntegrityConfirmation?: boolean
}

export interface CarInsuranceValues {
  date?: string
  owner?: string
  number?: string
  city?: string
  address?: string
  deliveryAddress?: string
  email?: string
  phone?: string
}

export const CarInsuranceFormView = ({
  history,
  shouldShowIntegrityConfirmation,
}: Props): ReactElement => {
  const state = get(history, "location.state") || {}
  const { total } = state

  console.log(state)

  const initialValues: CarInsuranceValues = {
    date: isSafari ? "" : getNowDate(),
    owner: state.owner,
    number: state.number,
    city: undefined,
    address: undefined,
    deliveryAddress: undefined,
    email: undefined,
    phone: state.phone,
  }

  const handleSubmit = (
    values: CarInsuranceValues,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    actions: FormikHelpers<any>,
  ): void => {
    const phone = getPhoneNumber(values.phone)
    if (phone.length < 11) {
      actions.setFieldError("phone", t("general.phoneLengthError"))
      actions.setSubmitting(false)

      return
    }

    const typeInsurance = shouldShowIntegrityConfirmation
      ? GtagFlowTypeEnum.MPD
      : GtagFlowTypeEnum.MTPL

    analyticsFillInfo(typeInsurance)

    history.push({
      pathname: payment,
      state: {
        ...state,
        name: values.owner,
        startDate: values.date,
        email: values.email,
        province: values.city,
        typeInsurance,
      },
    })
  }

  return (
    <Fragment>
      <FormTotal total={total || 0} />

      <InformationFormNote />

      <Formik
        component={({
          values,
          setFieldValue,
        }: FormikProps<CarInsuranceValues>): ReactElement => (
          <CarInsuranceFormContent
            values={values}
            setFieldValue={setFieldValue}
            shouldShowIntegrityConfirmation={shouldShowIntegrityConfirmation}
          />
        )}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CarInsuranceSchema}
        validateOnBlur={false}
        validateOnChange={false}
      />
    </Fragment>
  )
}

export const CarInsuranceForm = withRouter(CarInsuranceFormView)
