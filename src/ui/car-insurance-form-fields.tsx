import React, { ReactElement } from "react"
import { t } from "../i18n/i18n"
import { phoneMask } from "../core/masks"
import { SelectItem } from "../core"

import { Box } from "./box"
import { InputDate } from "./inputs/input-date"
import { InputField } from "./inputs/input-field"
import { SelectCity } from "./select/select-city"
import { CarInsuranceValues } from "./car-insurance.form"

interface Props {
  values: CarInsuranceValues
  setFieldValue: (field: string, value: string) => void
}

export const CarInsuranceFormFields = ({
  setFieldValue,
  values,
}: Props): ReactElement => {
  const handleCityChange = (item: SelectItem): void =>
    setFieldValue("city", item.name)

  return (
    <Box
      display="flex"
      flexDirection={["column", "row"]}
      justifyContent="center"
    >
      <Box width={["100%", "calc(50% - 7px)"]} mr={[0, "15px"]}>
        <InputDate
          name="date"
          value={values.date || ""}
          placeholder={t("general.startDate")}
          setFieldValue={setFieldValue}
        />

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
        <SelectCity
          id="city"
          name="city"
          mt={[0, "8px"]}
          mb={["16px", "8px"]}
          inputProps={{
            placeholder: t("general.city"),
            fontSize: 3,
            shouldShowLabelPlaceholder: !values.city,
          }}
          onChange={handleCityChange}
        />
      </Box>

      <Box width={["100%", "calc(50% - 7px)"]}>
        <InputField
          name="address"
          placeholder={t("general.address")}
          shouldShowLabelPlaceholder={!values.address}
        />
        <InputField
          name="deliveryAddress"
          placeholder={t("general.delivery")}
          shouldShowLabelPlaceholder={!values.deliveryAddress}
        />
        <InputField
          name="email"
          type="email"
          placeholder={t("carLiability.form.email")}
          shouldShowLabelPlaceholder={!values.email}
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
  )
}
