import React, { ReactElement } from "react"

import { Text } from "../../ui/text"
import { t } from "../../i18n/i18n"

export const SecondStepSelectNote = (): ReactElement => (
  <Text
    m="0 10px 0 0"
    fontSize={0}
    fontFamily="'PT Sans', sans-serif"
    fontStyle="italic"
    textAlign="right"
  >
    {t("carLiability.step2.selectNote")}
  </Text>
)
