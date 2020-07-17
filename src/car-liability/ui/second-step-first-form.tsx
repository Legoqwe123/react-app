import React, { ReactElement } from "react"
import { FormikValues } from "formik"
import { t } from "../../i18n/i18n"
import { SelectItem } from "../../core"

import { Box } from "../../ui/box"
import { SecondStepSelectNote } from "./second-step-select-note"
import { CoverageSelect } from "../../ui/coverage-select"
import { ParticipantsSelect } from "../../ui/participants-select"
import { coverageItems, getNumberOfParticipantsItems } from "../../core/items"

interface Props {
  setFieldValue: (field: string, value: string | undefined) => void
  values: FormikValues
}

export const SecondStepFirstForm = ({
  setFieldValue,
  values,
}: Props): ReactElement => (
  <Box>
    <CoverageSelect
      name="personalInsuranceCoverage"
      placeholder={t("carLiability.step2.personalInsuranceCoveragePlaceholder")}
      onChange={(item: SelectItem): void =>
        setFieldValue("personalInsuranceCoverage", item.id)
      }
      initialValue={coverageItems.find(
        (item: SelectItem): boolean =>
          item.id === values.personalInsuranceCoverage,
      )}
    />
    <SecondStepSelectNote />

    <ParticipantsSelect
      name="personalNumber"
      placeholder={t("carLiability.step2.personalNumberPlaceholder")}
      mt="22px"
      onChange={(item: SelectItem): void =>
        setFieldValue("personalNumber", item.id)
      }
      initialValue={getNumberOfParticipantsItems().find(
        (item: SelectItem): boolean => item.id === values.personalNumber,
      )}
    />
  </Box>
)
