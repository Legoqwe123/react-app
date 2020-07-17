import React, { ReactElement, forwardRef } from "react"
import Tippy from "@tippyjs/react"
import { useIntl } from "react-intl"
import { v4 as uuid } from "uuid"

import { getHealthInsuranceText } from "../healthcare/health-insurance-info"
import { theme } from "../theme/theme"
import { SvgHint } from "./icons/hint"
import { BoxProps, Box } from "./box"
import { Text } from "./text"
import { t } from "../i18n/i18n"

const Hint = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <SvgHint boxProps={{ ref }} />
})

Hint.displayName = "hint"

interface Props {
  subject: string
  value?: string
  isHealth: boolean
}

export const CoverageTooltip = ({
  subject,
  value,
  isHealth,
}: Props): ReactElement | null => {
  const language: string = useIntl().locale
  const text = isHealth
    ? getHealthInsuranceText(
        language,
        subject === "Quyền lợi Nội trú" || subject === "Inpatient cover"
          ? `${subject} tooltip`
          : subject,
      )
    : t(`${subject}Tooltip`, {
        0: value,
        1: <br key={uuid()} />,
        2: <br key={uuid()} />,
        3: <br key={uuid()} />,
        4: <br key={uuid()} />,
      })

  if (!text) {
    return null
  }

  const container = (
    <div>
      {isHealth
        ? text.split("\n").map(
            (element: string, index: number): ReactElement => {
              return (
                <Text key={index} py={0} color={theme("colors.white")}>
                  {element}
                </Text>
              )
            },
          )
        : text}
    </div>
  )

  return (
    <Box mr="5px">
      <Tippy content={container} animation="scale">
        <Hint />
      </Tippy>
    </Box>
  )
}
