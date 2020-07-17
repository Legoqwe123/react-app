import React, { ReactElement } from "react"
import { t } from "../../i18n/i18n"

import { Text } from "../../ui/text"

export const ResultsTitle = (): ReactElement => (
  <Text
    px={["36px", "36px", "36px", "185px"]}
    mt={["28px", "28px", "51px"]}
    mb={["24px", "24px", "39px"]}
    fontSize={[5, 5, 7]}
    fontWeight="900"
    lineHeight="32px"
    textAlign={["center", "center", "left"]}
    color="primary"
  >
    {t("carLiability.results.title")}
  </Text>
)
