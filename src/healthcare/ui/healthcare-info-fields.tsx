import React, { ReactElement } from "react"
import { InputField } from "../../ui/inputs/input-field"
import { Form, FormikProps } from "formik"
import { Box } from "../../ui/box"
import { Button } from "../../ui/buttons/button"
import { t } from "../../i18n/i18n"
import { phoneMask } from "../../core/masks"
import { InputDate } from "../../ui/inputs/input-date"
import { SelectItem } from "../../core"
import { HealthcareInfoProps } from "./healthcare-info-form"
import { SelectCity } from "../../ui/select/select-city"

export const HealthcareInfoFields = ({
  setFieldValue,
  values,
}: FormikProps<HealthcareInfoProps>): ReactElement => {
  const handleCityChange = (item: SelectItem): void =>
    setFieldValue("city", item.name)

  return (
    <Form>
      <Box
        mx={["auto", "auto", "auto", "auto", "270px"]}
        px={["30px", "30px", "30px", "30px", 0]}
        display="flex"
        flexDirection={["column", "column", "row"]}
        alignItems={["center", "center", "flex-start"]}
        justifyContent={["center", "center", "space-between"]}
        flexWrap={["wrap", "wrap", "wrap", "wrap", "nowrap"]}
      >
        <Box width={["100%", "375px", "calc(50% - 7px)"]}>
          <InputDate
            name="date"
            value={values.date}
            placeholder={t("general.startDate")}
            setFieldValue={setFieldValue}
          />

          <InputField
            name="name"
            placeholder={t("general.fullName")}
            shouldShowLabelPlaceholder={!values.name}
          />

          <SelectCity
            name="city"
            inputProps={{
              placeholder: t("general.city"),
              fontSize: 3,
              shouldShowLabelPlaceholder: !values.city,
            }}
            id="city"
            mt={[0, "8px"]}
            mb={["16px", "8px"]}
            onChange={handleCityChange}
          />

          <InputField
            name="address"
            placeholder={t("general.address")}
            shouldShowLabelPlaceholder={!values.address}
          />
        </Box>

        <Box
          width={["100%", "375px", "calc(50% - 7px)"]}
          ml={[0, 0, 0, 0, "15px"]}
        >
          <InputField
            name="deliveryAddress"
            placeholder={t("general.delivery")}
            shouldShowLabelPlaceholder={!values.deliveryAddress}
          />

          <InputField
            name="email"
            type="email"
            placeholder={t("general.email")}
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

      <Button
        text={t("general.buy")}
        width={["314px", "314px", "210px"]}
        display="flex"
        justifyContent="center"
        mt="14px"
        mr={["auto", "auto", "30px", "30px", "277px"]}
        ml="auto"
      />
    </Form>
  )
}
