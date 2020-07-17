import React, { ReactElement } from "react"
import { Forms } from "./second-step-form"

import { Box } from "../../ui/box"
import { CheckBox } from "../../ui/checkbox"
import { Text } from "../../ui/text"

interface Props {
  form: Forms
  isChecked: boolean
  toggleForm: (form: Forms) => void
  text: string
  isLast?: boolean
  isFirst?: boolean
}

export const SecondStepCheck = ({
  form,
  isChecked,
  toggleForm,
  text,
  isLast,
  isFirst,
}: Props): ReactElement => {
  const handleToggle = (): void => toggleForm(form)

  return (
    <Box minWidth={["auto", "auto", "345px", "450px"]}>
      <CheckBox
        mb={isLast ? 0 : ["22px", "22px", "26px"]}
        mt={isFirst ? 0 : ["8px", "8px", 0]}
        isChecked={isChecked}
        onToggle={handleToggle}
      >
        <Text
          maxWidth={["386px", "386px", isLast ? "232px" : "270px"]}
          m="0 0 0 20px"
          fontSize={3}
          lineHeight="28px"
          cursor="pointer"
        >
          {text}
        </Text>
      </CheckBox>
    </Box>
  )
}
