import * as yup from "yup"
import { t } from "../i18n/i18n"

export const FormInfoSchema = yup.object().shape({
  owner: yup.string().required(t("general.required")),
  number: yup.string().required(t("general.required")),
  phone: yup.string().required(t("general.required")),
})
