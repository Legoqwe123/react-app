import React, { ReactElement } from "react"
import { BoxProps } from "./box"
import { SelectItem } from "../core"

import { TonnageSelect } from "./tonnage-select"
import { SeatsSelect } from "./seats-select"
import { TRUCKS } from "../core/constants"
import { getTonnageItems } from "../core/items"

interface Props {
  purpose: string
  styles: BoxProps
  handleSeatsChange: (item: SelectItem) => void
  handleTonnageChange: (item: SelectItem) => void
  isSeatsEmpty: boolean
  isComprehensive?: boolean
  initialItem?: string
}

export const SeatsTonnageSelect = ({
  purpose,
  styles,
  handleSeatsChange,
  handleTonnageChange,
  isSeatsEmpty,
  isComprehensive,
  initialItem,
}: Props): ReactElement =>
  purpose === TRUCKS ? (
    <TonnageSelect
      handleChange={handleTonnageChange}
      styles={styles}
      initialValue={getTonnageItems().find(
        (item: SelectItem): boolean => item.id === initialItem,
      )}
    />
  ) : (
    <SeatsSelect
      handleChange={handleSeatsChange}
      purpose={purpose}
      styles={styles}
      isEmpty={isSeatsEmpty}
      isComprehensive={isComprehensive}
      initialItem={initialItem}
    />
  )
