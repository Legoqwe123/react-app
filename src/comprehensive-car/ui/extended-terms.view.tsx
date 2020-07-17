import React, { ReactElement } from "react"

import { StepForm } from "../../ui/step-form"
import { Box } from "../../ui/box"
import { StepFormCheckbox } from "./step-form-checkbox"
import { FormikProps } from "formik"
import { ExtendedTermsTypes } from "./extended-terms.form"
import { useMediaQuery } from "react-responsive"
import { theme } from "../../theme/theme"
import { t } from "../../i18n/i18n"

export const ExtendedTermsView = ({
  values,
  setFieldValue,
}: FormikProps<ExtendedTermsTypes>): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.1"),
  })

  return (
    <StepForm>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        flexDirection={isMobile ? "column" : "row"}
        alignItems={isMobile ? "center" : null}
      >
        <Box
          width={isMobile ? "100%" : "50%"}
          maxWidth={isMobile ? "345px" : "435px"}
        >
          <StepFormCheckbox
            onToggle={(isChecked: boolean): void =>
              setFieldValue("newPlacements", isChecked)
            }
            isChecked={values.newPlacements}
          >
            {t("comprehensiveCar.newPlacements")}
          </StepFormCheckbox>

          <StepFormCheckbox
            onToggle={(isChecked: boolean): void =>
              setFieldValue("theftForParts", isChecked)
            }
            isChecked={values.theftForParts}
          >
            {t("comprehensiveCar.theftForParts")}
          </StepFormCheckbox>

          <StepFormCheckbox
            onToggle={(isChecked: boolean): void =>
              setFieldValue("waterDamage", isChecked)
            }
            isChecked={values.waterDamage}
          >
            {t("comprehensiveCar.waterDamage")}
          </StepFormCheckbox>
        </Box>

        <Box
          width={isMobile ? "100%" : "50%"}
          maxWidth="345px"
          textAlign={isMobile ? null : "right"}
        >
          <StepFormCheckbox
            onToggle={(isChecked: boolean): void =>
              setFieldValue("repairsInBrandedGarage", isChecked)
            }
            isChecked={values.repairsInBrandedGarage}
          >
            {t("comprehensiveCar.repairsInBrandedGarage")}
          </StepFormCheckbox>

          <StepFormCheckbox
            onToggle={(isChecked: boolean): void =>
              setFieldValue("specialModification", isChecked)
            }
            isChecked={values.specialModification}
          >
            {t("comprehensiveCar.specialModification")}
          </StepFormCheckbox>

          <StepFormCheckbox
            textProps={{ textAlign: "left" }}
            onToggle={(isChecked: boolean): void =>
              setFieldValue("territoryVietnam", isChecked)
            }
            isChecked={values.territoryVietnam}
          >
            {t("comprehensiveCar.territoryVietnam")}
          </StepFormCheckbox>
        </Box>
      </Box>
    </StepForm>
  )
}
