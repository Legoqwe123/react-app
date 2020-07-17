import React, { ReactElement } from "react"
import { Formik, FormikValues, FormikProps } from "formik"
import { useMediaQuery } from "react-responsive"
import { useLocation, useHistory } from "react-router-dom"
import { theme } from "../../theme/theme"
import { t } from "../../i18n/i18n"
import { ComprehensiveCarPriceSchema } from "../../validation-schema/comprehensive-car-price.schema"
import { comprehensiveCarExtendedTerms } from "../routes"
import { getCarPrice } from "../getAutoValues"
import { ANOTHER_MODEL } from "../../core/constants"
import { getPrice, formatPrice } from "../../core/convert-price"

import { StepForm } from "../../ui/step-form"
import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { CarPriceInput } from "./car-price-input"
import { gtagMPDStep2 } from "../../core/gtag"
import { DeductibleSelect } from "./deductible-select"

interface Fields {
  price: string
  deductible: string
}

export const ComprehensiveCarPriceForm = (): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location = useLocation<any>()
  const state = location.state
  const { brand, model, year } = state || {}
  const history = useHistory()

  const valueByMarket =
    state && state.price ? state.price : getCarPrice(brand, model, year)

  const min =
    model === ANOTHER_MODEL ? undefined : getPrice(valueByMarket) * 0.85
  const max =
    model === ANOTHER_MODEL ? undefined : getPrice(valueByMarket) * 1.15

  const initialValues = {
    price: valueByMarket,
    deductible: state && state.deductible ? state.deductible : "0",
  }

  const handleSubmit = (values: FormikValues): void => {
    const price = formatPrice(getPrice(values.price))

    gtagMPDStep2()

    history.push({
      pathname: comprehensiveCarExtendedTerms,
      state: {
        ...state,
        price,
        deductible: values.deductible,
      },
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ComprehensiveCarPriceSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ values, setFieldValue }: FormikProps<Fields>): ReactElement => (
        <StepForm>
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems={["center", "center", "flex-start"]}
          >
            <Box width="100%" maxWidth="434px">
              <Text
                fontSize={4}
                fontWeight="800"
                lineHeight="28px"
                mt="0px"
                mb={isMobile ? "14px" : 0}
              >
                {`${brand}, ${model}, ${year}`}
              </Text>
            </Box>
            <Box width="100%" maxWidth="434px">
              <Text lineHeight="28px" fontSize={4} mt={0} mb="15px">
                {t("comprehensiveCar.valueByMarket")}
              </Text>
              <CarPriceInput min={min} max={max} price={values.price} />

              <Text
                mt={["18px", "18px", "28px"]}
                mb={["17px", "17px", "25px"]}
                fontSize={4}
              >
                {t("comprehensiveCar.deductibleLabel")}
              </Text>
              <DeductibleSelect
                setFieldValue={setFieldValue}
                initialValue={values.deductible}
              />
              <Text mt={["15px", "15px", "6px"]} fontSize={1} lineHeight="22px">
                {t("comprehensiveCar.deductibleNote")}
              </Text>
            </Box>
          </Box>
        </StepForm>
      )}
    </Formik>
  )
}
