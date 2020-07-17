import React, { ReactElement } from "react"
import { FormikProps } from "formik"
import { useMediaQuery } from "react-responsive"
import { t } from "../../i18n/i18n"
import { theme } from "../../theme/theme"
import { SelectItem } from "../../core"

import { StepForm } from "../../ui/step-form"
import { PersonalInsuranceValues } from "./personal-insurance.form"
import { Box } from "../../ui/box"
import { StepFormCheckbox } from "./step-form-checkbox"
import { CoverageSelectNote } from "./coverage-select-note"
import { CoverageSelect } from "../../ui/coverage-select"
import { ParticipantsSelect } from "../../ui/participants-select"
import { coverageItems, getNumberOfParticipantsItems } from "../../core/items"

const personalInsuranceFields: string[] = [
  "personalInsuranceCoverage",
  "numberOfParticipants",
]

export const PersonalInsuranceView = ({
  values,
  setFieldValue,
}: FormikProps<PersonalInsuranceValues>): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.1"),
  })

  return (
    <StepForm>
      <Box
        display="flex"
        flexDirection="column"
        alignItems={isMobile ? "center" : null}
      >
        <Box maxWidth="305px">
          <StepFormCheckbox
            isChecked={values.personalInsurance}
            onToggle={(isChecked: boolean): void => {
              setFieldValue("personalInsurance", isChecked)
              personalInsuranceFields.forEach((field: string) =>
                setFieldValue(field, ""),
              )
            }}
            mb={isMobile ? "15px" : "19px"}
          >
            {t("comprehensiveCar.personalAccidentInsurance")}
          </StepFormCheckbox>
        </Box>

        {values.personalInsurance && (
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            alignItems={isMobile ? "center" : "baseline"}
            justifyContent="space-between"
            mt="-12px"
            width="100%"
          >
            <Box
              width={isMobile ? ["100%", "50%"] : "45%"}
              pb={isMobile ? "10px" : null}
              minWidth={[0, "314px", 0]}
              zIndex="2"
            >
              <CoverageSelect
                name="personalInsuranceCoverage"
                placeholder={t("general.coverage")}
                onChange={(selectedItem: SelectItem): void =>
                  setFieldValue("personalInsuranceCoverage", selectedItem.id)
                }
                initialValue={coverageItems.find(
                  (item: SelectItem): boolean =>
                    item.id === values.personalInsuranceCoverage,
                )}
              />
              <CoverageSelectNote htmlFor="personalInsuranceCoverage" />
            </Box>

            <ParticipantsSelect
              name="numberOfParticipants"
              placeholder={t("carLiability.step2.personalNumberPlaceholder")}
              onChange={(item: SelectItem): void =>
                setFieldValue("numberOfParticipants", item.id)
              }
              width={isMobile ? ["100%", "50%"] : "45%"}
              minWidth={[0, "314px", 0]}
              initialValue={getNumberOfParticipantsItems().find(
                (item: SelectItem): boolean =>
                  item.id === values.numberOfParticipants,
              )}
            />
          </Box>
        )}
      </Box>
    </StepForm>
  )
}
