import * as yup from "yup"
import { t } from "../i18n/i18n"

export const ComprehensiveCarHeaderSchema = yup.object().shape({
  brand: yup.string().required(t("general.required")),
  model: yup.string().required(t("general.required")),
  year: yup.string().required(t("general.required")),
})
