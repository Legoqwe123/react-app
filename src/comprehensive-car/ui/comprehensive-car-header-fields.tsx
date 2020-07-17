import React, { ReactElement } from "react"
import { t } from "../../i18n/i18n"
import { SelectItem } from "../../core"
import { ComprehensiveCarHeaderProps } from "./comprehensive-car-header-form"
import { convertItemForSelect } from "../../core/convert-to-select-item"
import { carBrandItems, getCarModels, getYears } from "../getAutoValues"

import { Box } from "../../ui/box"
import { Select } from "../../ui/select/select"
import { Button } from "../../ui/buttons/button"

interface Props {
  isMobile: boolean
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean,
  ) => void
  values: ComprehensiveCarHeaderProps
}

export const ComprehensiveCarHeaderFields = ({
  isMobile,
  setFieldValue,
  values,
}: Props): ReactElement => (
  <Box mt="22px" display="flex" flexDirection="column" alignItems="end">
    <Select
      id="select-brand"
      name="brand"
      items={carBrandItems}
      zIndex={3}
      onChange={(selectedItem: SelectItem): void => {
        setFieldValue("brand", selectedItem.id)
        setFieldValue("model", "")
        setFieldValue("year", "")
      }}
      selectedValue={convertItemForSelect(values.brand)}
      inputProps={{
        placeholder: t("comprehensiveCar.carBrand"),
        fontSize: 3,
        lineHeight: "34px",
      }}
    />

    <Select
      id="select-model"
      name="model"
      items={getCarModels(values.brand)}
      my="16px"
      zIndex={2}
      selectedValue={convertItemForSelect(values.model)}
      onChange={(selectedItem: SelectItem): void => {
        setFieldValue("model", selectedItem.id)
        setFieldValue("year", "")
      }}
      inputProps={{
        placeholder: t("comprehensiveCar.model"),
        fontSize: 3,
        lineHeight: "34px",
      }}
    />

    <Select
      id="select-year"
      name="year"
      items={getYears(values.brand, values.model)}
      selectedValue={convertItemForSelect(values.year)}
      onChange={(selectedItem: SelectItem): void =>
        setFieldValue("year", selectedItem.id)
      }
      inputProps={{
        placeholder: t("comprehensiveCar.year"),
        fontSize: 3,
        lineHeight: "34px",
      }}
    />

    <Button
      type="submit"
      text={isMobile ? t("general.compare") : t("general.continue")}
      width={isMobile ? "100%" : "185px"}
      mt="15px"
      ml="auto"
    />
  </Box>
)
