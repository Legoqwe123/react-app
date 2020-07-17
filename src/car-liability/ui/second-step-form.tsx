import React, { ReactElement, useEffect } from "react"
import { Form, FormikProps } from "formik"
import { t } from "../../i18n/i18n"
import styled from "styled-components"
import { theme } from "../../theme/theme"

import { Box } from "../../ui/box"
import { SecondStepCheck } from "./second-step-check"
import { SecondStepButtons } from "./second-step-buttons"
import { SecondStepFirstForm } from "./second-step-first-form"
import { SecondStepSecondForm } from "./second-step-second-form"

export enum Forms {
  PERSONAL = "personal",
  VOLUNTARY = "voluntary",
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 183px);

  @media (min-width: ${theme("breakpoints.1")}) {
    height: calc(100% - 231px);
  }
`

export interface Step2Values {
  personal: boolean
  personalInsuranceCoverage: string | undefined
  personalNumber: string | undefined
  voluntary: boolean
  voluntaryLiabilityInsurance: string | undefined
}

export const SecondStepForm = ({
  values,
  setFieldValue,
  touched,
  submitCount,
  setFieldTouched,
}: FormikProps<Step2Values>): ReactElement => {
  const isChecked = (form: Forms): boolean => values[form]

  const toggleForm = (formToToggle: Forms): void => {
    if (isChecked(formToToggle)) {
      setFieldValue(formToToggle, false)

      if (formToToggle === Forms.PERSONAL) {
        setFieldValue("personalInsuranceCoverage", undefined)
        setFieldValue("personalNumber", undefined)

        setFieldTouched("personalInsuranceCoverage", false, false)
        setFieldTouched("personalNumber", false, false)
      }

      if (formToToggle === Forms.VOLUNTARY) {
        setFieldValue("voluntaryLiabilityInsurance", undefined)

        setFieldTouched("voluntaryLiabilityInsurance", false, false)
      }

      return
    }

    setFieldValue(formToToggle, true)
  }

  useEffect((): void => {
    if (submitCount > 0) {
      if (
        !isChecked(Forms.PERSONAL) &&
        (touched.personalInsuranceCoverage || touched.personalNumber)
      ) {
        setFieldTouched("personalInsuranceCoverage", false, false)
        setFieldTouched("personalNumber", false, false)
      }

      if (!isChecked(Forms.VOLUNTARY) && touched.voluntaryLiabilityInsurance) {
        setFieldTouched("voluntaryLiabilityInsurance", false, false)
      }
    }
    // eslint-disable-next-line
  }, [submitCount])

  return (
    <StyledForm>
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
        p={[
          "30px 31px",
          "30px 31px",
          "20px 120px",
          "20px 120px 20px 279px",
          "20px 279px",
        ]}
        alignItems={["center", "center", "flex-start"]}
      >
        <Box
          width={["100%", "345px", "calc(50% - 8px)", "435px"]}
          mb="5px"
          mr={[0, 0, "15px"]}
        >
          <SecondStepCheck
            form={Forms.PERSONAL}
            isChecked={isChecked(Forms.PERSONAL)}
            toggleForm={toggleForm}
            text={t("carLiability.step2.personalInsurance")}
            isFirst
          />

          {isChecked(Forms.PERSONAL) && (
            <SecondStepFirstForm
              setFieldValue={setFieldValue}
              values={values}
            />
          )}
        </Box>

        <Box width={["100%", "345px", "calc(50% - 8px)", "435px"]}>
          <SecondStepCheck
            form={Forms.VOLUNTARY}
            isChecked={isChecked(Forms.VOLUNTARY)}
            toggleForm={toggleForm}
            text={t("carLiability.step2.voluntaryInsurance")}
            isLast
          />

          {isChecked(Forms.VOLUNTARY) && (
            <SecondStepSecondForm
              setFieldValue={setFieldValue}
              selectedItem={values.voluntaryLiabilityInsurance}
            />
          )}
        </Box>
      </Box>

      <SecondStepButtons />
    </StyledForm>
  )
}
