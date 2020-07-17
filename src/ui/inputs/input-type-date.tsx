import React, { ReactElement, ChangeEvent, useState } from "react"
import { dateMask } from "../../core/masks"
import { InputField } from "./input-field"
import { t } from "../../i18n/i18n"
import { Box } from "../box"
import { SvgCalendar } from "../icons/calendar"
import { isSafari } from "../../core/is-safari"
import { getNowDate } from "../../core/get-now-date"

interface Props {
  name: string
  placeholder?: string
  isDateOfBirth?: boolean
  value: string
  setFieldValue: (field: string, value: string) => void
}

export const InputTypeDate = ({
  name,
  placeholder,
  isDateOfBirth,
  value,
  setFieldValue,
}: Props): ReactElement => {
  const [actualPlaceholder, setActualPlaceholder] = useState(placeholder)

  const handleBlur = (event: ChangeEvent<HTMLInputElement>): void => {
    isDateOfBirth && setActualPlaceholder(placeholder)

    const [day, month, year] = event.target.value.split("/").map(Number)
    const date = new Date(year, month - 1, day)

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      setFieldValue(name, "")
    }
  }

  return (
    <Box width="100%" position="relative">
      <InputField
        name={name}
        mask={dateMask}
        onBlur={handleBlur}
        onFocus={(): void => {
          isDateOfBirth && setActualPlaceholder(t("general.dobPlaceholder"))
          isSafari && !isDateOfBirth && setFieldValue(name, getNowDate(true))
        }}
        placeholder={actualPlaceholder}
        boxProps={{ width: "100%" }}
        type="tel"
        isDateOfBirth={isDateOfBirth}
        shouldShowLabelPlaceholder={!value && !isDateOfBirth}
      />

      <SvgCalendar
        boxProps={{
          position: "absolute",
          top: "20px",
          right: "20px",
          cursor: "pointer",
        }}
      />
    </Box>
  )
}
