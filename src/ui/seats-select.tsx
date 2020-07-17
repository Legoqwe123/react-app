import React, { ReactElement, useState, Fragment, useEffect } from "react"
import { getSeatsItems } from "../core/items"
import { t } from "../i18n/i18n"
import { SelectItem } from "../core"
import { Select } from "./select/select"
import { BoxProps } from "./box"

interface Props {
  handleChange: (item: SelectItem) => void
  styles?: BoxProps
  purpose: string
  isEmpty?: boolean
  isComprehensive?: boolean
  initialItem?: string
}

export const SeatsSelect = ({
  handleChange,
  styles,
  purpose,
  isEmpty,
  isComprehensive,
  initialItem,
}: Props): ReactElement => {
  const [shouldRender, setShouldRender] = useState(true)
  const seatItems: SelectItem[] = purpose
    ? getSeatsItems(purpose.toLowerCase())
    : []

  useEffect((): void => {
    if (isEmpty && !isComprehensive) {
      setShouldRender(false)
      setTimeout((): void => {
        setShouldRender(true)
      })
    }
  }, [isEmpty, isComprehensive])

  return (
    <Fragment>
      {shouldRender && (
        <Select
          id="seats-select"
          name="seats"
          items={seatItems}
          inputProps={{ placeholder: t("carLiability.seats"), fontSize: 3 }}
          mt="15px"
          onChange={handleChange}
          initialValue={seatItems.find(
            (item: SelectItem): boolean => item.id === initialItem,
          )}
          {...styles}
        />
      )}
    </Fragment>
  )
}
