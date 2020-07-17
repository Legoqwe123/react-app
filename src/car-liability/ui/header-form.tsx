import React, { ReactElement } from "react"
import { t } from "../../i18n/i18n"
import { Formik } from "formik"
import { CarLiabilityHeaderSchema } from "../../validation-schema/car-liability-header.schema"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { secondStep } from "../routes"

import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { HeaderFormContent } from "./header-form-content"
import { liabilityFormId } from "../../core/anchors"
import { CarLiabilityInsurance } from "../../core"
import { gtagMTPLHeader } from "../../core/gtag"

const initialValues: CarLiabilityInsurance = {
  purpose: "",
  seats: "",
  tonnage: "",
}

const HeaderFormView = ({ history }: RouteComponentProps): ReactElement => {
  const handleSubmit = (values: CarLiabilityInsurance): void => {
    gtagMTPLHeader(values.purpose)

    history.push({ pathname: secondStep, state: values })
  }

  return (
    <Box
      id={liabilityFormId}
      p={["0 30px", "0 30px", 0, "0 30px"]}
      mt={[0, 0, "62px"]}
      mr={[0, 0, "80px", "155px"]}
      ml={[0, 0, "auto"]}
      width={["auto", "auto", "auto", "436px", "436px", "502px"]}
      textAlign={["center", "center", "left"]}
    >
      <Text
        mb={["19px", "19px", "10px"]}
        fontSize={[5, 5, "22px"]}
        fontWeight={["700", "700", "400"]}
        color={["primary", "primary", "blacks.0"]}
      >
        {t("carLiability.title")}
      </Text>
      <Text
        mt={["22px", "22px", "10px"]}
        fontSize={[3, 3, "22px"]}
        color={["text.1", "text.1", "greys.1"]}
      >
        {t("carLiability.text")}
      </Text>

      <Formik
        component={HeaderFormContent}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={CarLiabilityHeaderSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </Box>
  )
}

export const HeaderForm = withRouter(HeaderFormView)
