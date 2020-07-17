import React, { ReactElement } from "react"
import { HealthInfoSchema } from "../../validation-schema/health-info.schema"
import { useHistory } from "react-router-dom"
import { payment } from "../../routes"
import { formatPrice } from "../../core/convert-price"
import { getPhoneNumber } from "../../core/utils"
import { Formik, FormikHelpers } from "formik"
import { t } from "../../i18n/i18n"

import { Text } from "../../ui/text"
import { HealthcareInfoFields } from "./healthcare-info-fields"
import { Container } from "../../ui/container"
import { getNowDate } from "../../core/get-now-date"
import { isSafari } from "../../core/is-safari"
import { GtagFlowTypeEnum } from "../../core/enums"
import get from "lodash/get"
import { analyticsFillInfo } from "../../core/analytics-events"
import { InformationFormNote } from "../../ui/information-form-note"

interface Props {
  total: number
}

export interface HealthcareInfoProps {
  date: string
  name: string
  city: string
  address: string
  deliveryAddress: string
  email: string
  phone: string
}

const initialValues: HealthcareInfoProps = {
  date: isSafari ? "" : getNowDate(),
  name: "",
  city: "",
  address: "",
  deliveryAddress: "",
  email: "",
  phone: "",
}

export const HealthcareInfoForm = ({ total }: Props): ReactElement => {
  const history = useHistory()

  const handleSubmit = (
    values: HealthcareInfoProps,
    actions: FormikHelpers<HealthcareInfoProps>,
  ): void => {
    const phone = getPhoneNumber(values.phone)
    if (phone.length < 11) {
      actions.setFieldError("phone", t("general.phoneLengthError"))
      actions.setSubmitting(false)

      return
    }

    analyticsFillInfo(GtagFlowTypeEnum.HEALTH)

    history.push({
      pathname: payment,
      state: {
        ...get(history, "location.state"),
        name: values.name,
        typeInsurance: GtagFlowTypeEnum.HEALTH,
        total,
        startDate: values.date,
        email: values.email,
        province: values.city,
      },
    })
  }

  return (
    <Container>
      <Text
        fontWeight="bold"
        fontSize={4}
        lineHeight="32px"
        ml={[0, 0, "30px", "30px", "279px"]}
        px={["70px", 0]}
        my="30px"
        textAlign={["center", "center", "left"]}
      >
        {t("general.total", {
          0: formatPrice(total),
        })}
      </Text>

      <InformationFormNote isHealth />

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={HealthInfoSchema}
        component={HealthcareInfoFields}
      />
    </Container>
  )
}
