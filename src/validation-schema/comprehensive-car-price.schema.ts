import * as yup from "yup"
import { t } from "../i18n/i18n"

export const ComprehensiveCarPriceSchema = yup.object().shape({
  price: yup
    .string()
    .notOneOf(
      [`0 ` + t("general.coverageSum")],
      t("comprehensiveCar.priceShouldBeMoreThan0"),
    )
    .required(t("general.required")),
})
