import React, { ReactElement } from "react"
import { t } from "../i18n/i18n"

import { Form } from "formik"
import { Box } from "./box"
import { Button } from "./buttons/button"
import { CarInsuranceFormFields } from "./car-insurance-form-fields"
import { Text } from "./text"
import { CarInsuranceValues } from "./car-insurance.form"

interface Props {
  values: CarInsuranceValues
  setFieldValue: (field: string, value: string) => void
  shouldShowIntegrityConfirmation?: boolean
}

export const CarInsuranceFormContent = ({
  setFieldValue,
  values,
  shouldShowIntegrityConfirmation,
}: Props): ReactElement => (
  <Form>
    <Box
      p={[
        "0 30px 30px 30px",
        "0 30px 30px 30px",
        "0 140px 30px 140px",
        "0 279px 30px 279px",
      ]}
    >
      <CarInsuranceFormFields setFieldValue={setFieldValue} values={values} />

      {shouldShowIntegrityConfirmation && (
        <Text
          fontSize={1}
          lineHeight="22px"
          mt="0"
          mb={["30px", "30px", "50px"]}
        >
          {t("comprehensiveCar.confirmationOfIntegrity")}
        </Text>
      )}

      <Button
        type="submit"
        text={t("general.buy")}
        display="block"
        width="100%"
        maxWidth={["100%", "210px"]}
        py="8px"
        ml="auto"
        mt={["14px", "14px", "34px", "99px"]}
      />
    </Box>
  </Form>
)
