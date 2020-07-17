import React, { ReactElement } from "react"
import { t } from "../../i18n/i18n"
import { PERSONAL } from "../../core/constants"

import { Text } from "../../ui/text"
import { Box } from "../../ui/box"
import { SvgCar } from "../../ui/icons/car"

interface Props {
  purpose: string | undefined
  numberOfSeats: string | undefined
  tonnage: string | undefined
}

export const getDesktopPurpose = (purpose: string | undefined): string => {
  switch (purpose) {
    case PERSONAL:
      return t("carLiability.results.personalPurpose")
    default:
      return t(`carLiability.${purpose}`)
  }
}

export const HeaderFirstLine = ({
  purpose,
  numberOfSeats,
  tonnage,
}: Props): ReactElement => (
  <Box display="flex">
    <SvgCar
      box={{ pt: "4px" }}
      props={{ style: { backgroundColor: "transparent" } }}
    />
    <Text
      display={["block", "block", "none"]}
      m="0 0 0 9px"
      fontSize={1}
      lineHeight="22px"
    >
      {t(`carLiability.${purpose}`)}
      <br />
      {numberOfSeats || tonnage}
    </Text>
    <Text
      display={["none", "none", "block"]}
      m="0 0 0 10px"
      fontSize={1}
      lineHeight="22px"
      mr={[0, 0, "20px"]}
    >
      {`${getDesktopPurpose(purpose)} `}&nbsp;
      {numberOfSeats || tonnage}
    </Text>
  </Box>
)
