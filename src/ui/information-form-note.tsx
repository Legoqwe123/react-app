import React, { ReactElement } from "react"
import { t } from "../i18n/i18n"

import { Text } from "./text"
import { Box } from "./box"

export const InformationFormNote = ({
  isHealth,
}: {
  isHealth?: boolean
}): ReactElement => (
  <Box
    display="flex"
    justifyContent="center"
    px={
      isHealth
        ? ["30px", "30px", "30px", "30px", 0]
        : ["30px", "30px", "140px", "279px"]
    }
  >
    <Text
      lineHeight="22px"
      fontSize={1}
      mb={["32px", "32px", "15px"]}
      mx={isHealth ? ["auto", "auto", "auto", "auto", "270px"] : "unset"}
      width={isHealth ? ["100%", "375px", "100%"] : "unset"}
    >
      {t("informationForm.note")}
    </Text>
  </Box>
)
