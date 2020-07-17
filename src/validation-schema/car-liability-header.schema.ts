import * as yup from "yup"
import { t } from "../i18n/i18n"

export const CarLiabilityHeaderSchema = yup.object().shape(
  {
    purpose: yup.string().required(t("general.required")),
    seats: yup.string().when("tonnage", {
      is: tonnage => !tonnage,
      then: yup.string().required(t("general.required")),
    }),
    tonnage: yup.string().when("seats", {
      is: seats => !seats,
      then: yup.string().required(t("general.required")),
    }),
  },
  [["seats", "tonnage"]],
)
