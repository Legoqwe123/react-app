import React, { ReactElement } from "react"
import { Field, FieldProps } from "formik"
import createNumberMask from "text-mask-addons/dist/createNumberMask"
import { t } from "../../i18n/i18n"
import { Box } from "../../ui/box"
import { Input } from "../../ui/inputs/input"
import { getPrice, formatPrice } from "../../core/convert-price"

const maskOptions = {
  prefix: "",
  suffix: " " + t("comprehensiveCar.carPrice"),
  allowDecimal: false,
  thousandsSeparatorSymbol: ",",
  integerLimit: 20,
  allowNegative: false,
  allowLeadingZeroes: false,
}

interface Props {
  min: number | undefined
  max: number | undefined
  price: string
}

export const CarPriceInput = ({ min, max, price }: Props): ReactElement => {
  const validateCarPrice = (): string => {
    let error = ""
    const carPrice = getPrice(price)

    if (min && max && (min > carPrice || carPrice > max)) {
      error = t("comprehensiveCar.priceShouldBe", {
        0: formatPrice(Math.ceil(min)),
        1: formatPrice(Math.floor(max)),
      })
    }

    return error
  }

  return (
    <Field name="price" validate={validateCarPrice}>
      {({ field, form, meta }: FieldProps): ReactElement => (
        <Box width="100%">
          <Input
            name="price"
            placeholder={t("comprehensiveCar.valueByMarketPlaceholder")}
            showMask={false}
            mask={createNumberMask({ ...maskOptions })}
            fieldProps={{ field, form, meta }}
          />
        </Box>
      )}
    </Field>
  )
}
