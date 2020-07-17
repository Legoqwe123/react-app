import React, { ReactElement } from "react"
import { t } from "../i18n/i18n"

import { Text } from "./text"
import { formatPrice } from "../core/convert-price"

interface Props {
  total: number
}

export const FormTotal = ({ total }: Props): ReactElement => (
  <Text
    maxWidth={["206px", "100%"]}
    mt={["32px", "32px", "30px"]}
    ml={["auto", "37px", "140px", "279px"]}
    mr="auto"
    mb={["12px", "12px", "15px"]}
    fontSize={4}
    fontWeight="700"
    lineHeight="32px"
    textAlign={["center", "left"]}
  >
    {t("carLiability.form.total", { 0: formatPrice(total) })}
  </Text>
)
