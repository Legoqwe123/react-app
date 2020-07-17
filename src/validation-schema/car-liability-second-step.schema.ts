import * as yup from "yup"
import { t } from "../i18n/i18n"

export const CarLiabilitysecondStepSchema = yup.object().shape({
  personal: yup.boolean(),
  personalInsuranceCoverage: yup.string().when("personal", {
    is: personal => personal,
    then: yup.string().required(t("general.required")),
  }),
  personalNumber: yup.string().when("personal", {
    is: personal => personal,
    then: yup.string().required(t("general.required")),
  }),
  voluntary: yup.boolean(),
  voluntaryLiabilityInsurance: yup.string().when("voluntary", {
    is: voluntary => voluntary,
    then: yup.string().required(t("general.required")),
  }),
})
