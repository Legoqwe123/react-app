import * as yup from "yup"
import { t } from "../i18n/i18n"

export const ComprehensiveAdditionalInsurancesSchema = yup.object().shape(
  {
    carLiabilityInsurance: yup.boolean(),
    purpose: yup
      .string()
      .when(["carLiabilityInsurance", "voluntaryLiabilityInsurance"], {
        is: (carLiabilityInsurance, voluntaryLiabilityInsurance) =>
          carLiabilityInsurance || voluntaryLiabilityInsurance,
        then: yup.string().required(t("general.required")),
      }),
    seats: yup
      .string()
      .when(
        ["carLiabilityInsurance", "voluntaryLiabilityInsurance", "tonnage"],
        {
          is: (carLiabilityInsurance, voluntaryLiabilityInsurance, tonnage) =>
            (carLiabilityInsurance || voluntaryLiabilityInsurance) && !tonnage,
          then: yup.string().required(t("general.required")),
        },
      ),
    tonnage: yup
      .string()
      .when(["carLiabilityInsurance", "voluntaryLiabilityInsurance", "seats"], {
        is: (carLiabilityInsurance, voluntaryLiabilityInsurance, seats) =>
          (carLiabilityInsurance || voluntaryLiabilityInsurance) && !seats,
        then: yup.string().required(t("general.required")),
      }),
    voluntaryLiabilityInsurance: yup.boolean(),
    voluntaryLiabilityCoverage: yup.string().when(
      "voluntaryLiabilityInsurance",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (voluntaryLiabilityInsurance: boolean, schema: any) =>
        voluntaryLiabilityInsurance
          ? schema.required(t("general.required"))
          : schema,
    ),
  },
  [
    ["carLiabilityInsurance", "purpose"],
    ["carLiabilityInsurance", "seats"],
    ["carLiabilityInsurance", "tonnage"],
    ["purpose", "seats"],
    ["purpose", "tonnage"],
    ["seats", "tonnage"],
  ],
)
