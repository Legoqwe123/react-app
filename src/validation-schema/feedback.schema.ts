import * as yup from "yup"
import { t } from "../i18n/i18n"

export const FeedbackSchema = yup.object().shape({
  email: yup
    .string()
    .email(t("general.invalidEmail"))
    .required(t("general.required")),
  message: yup.string().required(t("general.required")),
})
