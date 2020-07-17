import React, { ReactElement, Fragment } from "react"
import { SelectItem, CarLiabilityInsurance } from "../../core"

import { PurposeSelect } from "../../ui/purpose-select"
import { SeatsTonnageSelect } from "../../ui/seats-tonnage-select"

interface Props {
  values: CarLiabilityInsurance
  setFieldValue: (field: string, value: string | undefined) => void
}

export const HeaderFormFields = ({
  setFieldValue,
  values,
}: Props): ReactElement => {
  const handlePurposeChange = (item: SelectItem): void => {
    setFieldValue("purpose", item.id)

    if (values.seats) {
      setFieldValue("seats", "")
    }

    if (values.tonnage) {
      setFieldValue("tonnage", "")
    }
  }

  const handleSeatsChange = (item: SelectItem): void =>
    setFieldValue("seats", item.id)

  const handleTonnageChange = (item: SelectItem): void =>
    setFieldValue("tonnage", item.id)

  return (
    <Fragment>
      <PurposeSelect
        handleChange={handlePurposeChange}
        styles={{ mt: ["34px", "34px", "28px"] }}
      />

      <SeatsTonnageSelect
        purpose={values.purpose}
        handleSeatsChange={handleSeatsChange}
        handleTonnageChange={handleTonnageChange}
        styles={{ mb: ["20px", "20px", "16px"] }}
        isSeatsEmpty={values.seats === ""}
      />
    </Fragment>
  )
}
