import React, { ReactElement } from "react"
import { Formik, Form } from "formik"
import { SliderInput } from "./slider-input"
import { Button } from "../../ui/buttons/button"
import { t } from "../../i18n/i18n"
import { Box } from "../../ui/box"
import { MIN_RANGE, MAX_RANGE } from "../../core/constants"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { healthCompanies } from "../routes"
import { HealthHeaderSchema } from "../../validation-schema/health-header.schema"
import { InputTypeDate } from "../../ui/inputs/input-type-date"
import { formatDate } from "../../core/format-date"
import { gtagHealthHeader } from "../../core/gtag"

type Props = RouteComponentProps & {
  isMobile: boolean
}

interface HealthFormProps {
  min: number
  max: number
  date: string
}

export const HealthHeaderFields = withRouter(
  ({ isMobile, history }: Props): ReactElement => {
    const maxTotalCoverage = MAX_RANGE

    const initialValues = {
      min: MIN_RANGE,
      max: maxTotalCoverage,
      date: "",
    }

    const handleSubmit = (values: HealthFormProps): void => {
      const { min, max, date } = values
      gtagHealthHeader(date)

      history.push({
        pathname: healthCompanies,
        state: {
          min,
          max,
          date: formatDate(date),
        },
      })
    }

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={HealthHeaderSchema}
        validateOnChange={false}
        validateOnBlur={false}
        component={({ values, setFieldValue }): ReactElement => (
          <Form>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="end"
              width="100%"
            >
              <SliderInput
                minName="min"
                maxName="max"
                minValue={MIN_RANGE}
                maxValue={maxTotalCoverage}
                values={values}
                setFieldValue={setFieldValue}
              />

              <InputTypeDate
                name="date"
                setFieldValue={setFieldValue}
                placeholder={t("health.birthDate")}
                isDateOfBirth
                value={values.date}
              />

              <Button
                text={t("general.continue")}
                width={isMobile ? "100%" : "185px"}
                ml="auto"
                mt="15px"
              />
            </Box>
          </Form>
        )}
      />
    )
  },
)
