import React, { ReactElement, Fragment } from "react"
import { FormikProps } from "formik"
import { AdditionalComprehensiveProps } from "./additional-insurances.form"
import { useMediaQuery } from "react-responsive"
import { theme } from "../../theme/theme"
import { t } from "../../i18n/i18n"
import { SelectItem } from "../../core"

import { StepForm } from "../../ui/step-form"
import { StepFormCheckbox } from "./step-form-checkbox"
import { Box } from "../../ui/box"
import { CoverageSelectNote } from "./coverage-select-note"
import { PurposeSelect } from "../../ui/purpose-select"
import { SeatsTonnageSelect } from "../../ui/seats-tonnage-select"
import { CoverageSelect } from "../../ui/coverage-select"
import { coverageItems } from "../../core/items"
import { TRUCKS } from "../../core/constants"

export const AdditionalInsurancesView = ({
  values,
  setFieldValue,
}: FormikProps<AdditionalComprehensiveProps>): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.1"),
  })

  const handlePurposeChange = (item: SelectItem): void => {
    setFieldValue("purpose", item.id)
    setFieldValue("seats", "")
  }

  const handleSeatsChange = (item: SelectItem): void =>
    setFieldValue("seats", item.id)

  const handleTonnageChange = (item: SelectItem): void =>
    setFieldValue("tonnage", item.id)

  return (
    <StepForm buttonBottom={["100px", "80px", "100px"]}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={isMobile ? null : "space-between"}
        flexDirection={isMobile ? "column" : "row"}
        alignItems={isMobile ? "center" : null}
      >
        <Box maxWidth="345px" width={isMobile ? "100%" : "48%"}>
          <StepFormCheckbox
            isChecked={values.carLiabilityInsurance}
            onToggle={(isChecked: boolean): void => {
              setFieldValue("carLiabilityInsurance", isChecked)
              setFieldValue("purpose", "")
              setFieldValue("seats", "")
            }}
            mb={
              values.carLiabilityInsurance || values.voluntaryLiabilityInsurance
                ? ["10px", "25px"]
                : "32px"
            }
          >
            {t("comprehensiveCar.carCivilLiabilityInsurance")}
          </StepFormCheckbox>

          {(values.carLiabilityInsurance ||
            values.voluntaryLiabilityInsurance) && (
            <Fragment>
              <PurposeSelect
                handleChange={handlePurposeChange}
                initialValue={values.purpose}
              />

              <SeatsTonnageSelect
                handleSeatsChange={handleSeatsChange}
                handleTonnageChange={handleTonnageChange}
                purpose={values.purpose}
                styles={{ mb: ["10px", "10px", "16px"] }}
                isSeatsEmpty={!!values.seats}
                isComprehensive
                initialItem={
                  values.purpose === TRUCKS ? values.tonnage : values.seats
                }
              />
            </Fragment>
          )}
        </Box>

        <Box maxWidth="345px" width={isMobile ? "100%" : "50%"}>
          <StepFormCheckbox
            isChecked={values.voluntaryLiabilityInsurance}
            onToggle={(isChecked: boolean): void => {
              setFieldValue("voluntaryLiabilityInsurance", isChecked)
              setFieldValue("voluntaryLiabilityCoverage", "")
            }}
            mb={["10px", "25px"]}
          >
            {t("comprehensiveCar.voluntaryCivilLiabilityInsurance")}
          </StepFormCheckbox>

          {values.voluntaryLiabilityInsurance && (
            <Fragment>
              <CoverageSelect
                name="voluntaryLiabilityCoverage"
                placeholder={t("general.coverage")}
                onChange={(selectedItem: SelectItem): void =>
                  setFieldValue("voluntaryLiabilityCoverage", selectedItem.id)
                }
                initialValue={coverageItems.find(
                  (item: SelectItem): boolean =>
                    item.id === values.voluntaryLiabilityCoverage,
                )}
              />
              <CoverageSelectNote htmlFor="voluntaryLiabilityCoverage" />
            </Fragment>
          )}
        </Box>
      </Box>
    </StepForm>
  )
}
