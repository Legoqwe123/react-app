import React, { ReactElement } from "react"
import { t } from "../../i18n/i18n"
import { CarLiabilityInsurance } from "../../core"

import { Form, FormikProps } from "formik"
import { Box } from "../../ui/box"
import { Button } from "../../ui/buttons/button"
import { HeaderFormFields } from "./header-form-fields"

export const HeaderFormContent = ({
  setFieldValue,
  values,
}: FormikProps<CarLiabilityInsurance>): ReactElement => (
  <Box
    maxWidth={["300px", "300px", "300px", "436px"]}
    mx="auto"
    textAlign="left"
  >
    <Form>
      <HeaderFormFields setFieldValue={setFieldValue} values={values} />

      <Button
        text={t("carLiability.action")}
        variant="primary"
        type="submit"
        display="block"
        width={["100%", "100%", "100%", "182px"]}
        py="8px"
        ml={[0, 0, "auto"]}
      />
    </Form>
  </Box>
)
