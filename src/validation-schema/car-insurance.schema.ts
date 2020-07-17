import * as yup from "yup"
import { t } from "../i18n/i18n"

export const CarInsuranceSchema = yup.object().shape({
  date: yup.string().required(t("general.required")),
  owner: yup.string().required(t("general.required")),
  number: yup.string().required(t("general.required")),
  city: yup.string().required(t("general.required")),
  address: yup.string().required(t("general.required")),
  deliveryAddress: yup.string().required(t("general.required")),
  email: yup
    .string()
    .email(t("general.invalidEmail"))
    .required(t("general.required")),
  phone: yup.string().required(t("general.required")),
})
