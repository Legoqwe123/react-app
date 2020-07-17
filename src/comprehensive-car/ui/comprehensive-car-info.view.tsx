import React, { ReactElement } from "react"
import { FormikProps } from "formik"
import { useMediaQuery } from "react-responsive"

import { theme } from "../../theme/theme"
import { InfoFormType } from "./comprehensive-car-info.form"
import { t } from "../../i18n/i18n"

import { Box } from "../../ui/box"
import { StepForm } from "../../ui/step-form"
import { InputField } from "../../ui/inputs/input-field"
import { phoneMask } from "../../core/masks"

export const ComprehensiveCarInfoView = ({
  values,
}: FormikProps<InfoFormType>): ReactElement => {
  const isDesktop = useMediaQuery({
    maxWidth: theme("breakpoints.5"),
  })

  console.log(isDesktop)

  return (
    <StepForm>
      <Box display="flex" justifyContent="left">
        <Box flexBasis={isDesktop ? "100%" : "35%"}>
          <InputField
            name="owner"
            placeholder={t("carLiability.form.owner")}
            shouldShowLabelPlaceholder={!values.owner}
          />
          <InputField
            name="number"
            placeholder={t("carLiability.form.number")}
            shouldShowLabelPlaceholder={!values.number}
          />
          <InputField
            name="phone"
            placeholder={t("general.phone")}
            mask={phoneMask}
            type="tel"
            shouldShowLabelPlaceholder={!values.phone}
          />
        </Box>
      </Box>
    </StepForm>
  )
}
