import * as yup from "yup"
import { MIN_RANGE, MIN_AGE, MAX_AGE } from "../core/constants"
import { t } from "../i18n/i18n"
import { getAge } from "../core/get-age"
import { formatDate } from "../core/format-date"

export const HealthHeaderSchema = yup.object().shape({
  min: yup
    .number()
    .min(MIN_RANGE)
    .required(),
  max: yup
    .number()
    .min(MIN_RANGE)
    .required(),
  date: yup
    .string()
    .transform((value: string) => formatDate(value))
    .test("date", t("general.incorrectDOB"), (value: string) => {
      const age = getAge(value)
      return age >= MIN_AGE && age <= MAX_AGE
    })
    .required(t("general.required")),
})
