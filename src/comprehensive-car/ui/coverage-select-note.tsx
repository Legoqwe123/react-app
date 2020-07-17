import React, { ReactElement } from "react"

import { Box } from "../../ui/box"
import { Label } from "../../ui/label"
import { t } from "../../i18n/i18n"

interface Props {
  htmlFor: string
}

export const CoverageSelectNote = ({ htmlFor }: Props): ReactElement => (
  <Box textAlign="right" mt="-8px">
    <Label
      htmlFor={htmlFor}
      fontStyle="italic"
      fontSize={["10px", "10px", 0]}
      lineHeight="28px"
      fontFamily={[
        "'Inter', sans-serif",
        "'Inter', sans-serif",
        "'PT Sans', sans-serif",
      ]}
    >
      {t("general.coverageLabel")}
    </Label>
  </Box>
)
