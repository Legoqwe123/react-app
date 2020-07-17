import React, { ReactElement } from "react"
import { t } from "../../i18n/i18n"
import { SelectItem } from "../../core"

import { Box } from "../../ui/box"
import { Select } from "../../ui/select/select"

import { SecondStepSelectNote } from "./second-step-select-note"
import { voluntaryCivilLiabilityInsuranceItems } from "../../core/items"

interface Props {
  setFieldValue: (field: string, value: string | undefined) => void
  selectedItem?: string
}

export const SecondStepSecondForm = ({
  setFieldValue,
  selectedItem,
}: Props): ReactElement => (
  <Box mt={["22px", "22px", "26px"]}>
    <Select
      name="voluntaryLiabilityInsurance"
      id="voluntary-liability-insurance-select"
      items={voluntaryCivilLiabilityInsuranceItems}
      inputProps={{
        fontSize: 3,
        placeholder: t("carLiability.step2.voluntaryAmountPlaceholder"),
      }}
      onChange={(item: SelectItem | null): void =>
        item ? setFieldValue("voluntaryLiabilityInsurance", item.id) : undefined
      }
      initialValue={voluntaryCivilLiabilityInsuranceItems.find(
        (item: SelectItem): boolean => item.id === selectedItem,
      )}
    />

    <SecondStepSelectNote />
  </Box>
)
