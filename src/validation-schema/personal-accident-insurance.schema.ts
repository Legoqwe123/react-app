import * as yup from "yup"
import { t } from "../i18n/i18n"

export const PersonalAccidentInsuranceSchema = yup.object().shape({
  personalInsurance: yup.boolean(),
  personalInsuranceCoverage: yup
    .string()
    .when("personalInsurance", (personalInsurance: boolean, schema: any) => {
      return personalInsurance ? schema.required(t("general.required")) : schema
    }),
  numberOfParticipants: yup
    .string()
    .when("personalInsurance", (personalInsurance: boolean, schema: any) => {
      return personalInsurance ? schema.required(t("general.required")) : schema
    }),
})
