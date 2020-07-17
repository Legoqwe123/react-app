import React, { ReactElement, useState } from "react"
import { theme } from "../../theme/theme"

import { Box, BoxProps } from "../box"
import { InputField } from "./input-field"
import { SvgCalendar } from "../icons/calendar"
import { InputTypeDate } from "./input-type-date"
import { useMediaQuery } from "react-responsive"
import { isSafari } from "../../core/is-safari"

type Props = BoxProps & {
  name: string
  value: string
  setFieldValue: (field: string, value: string) => void
}

export const InputDate = ({
  name,
  value,
  setFieldValue,
  ...rest
}: Props): ReactElement => {
  const isMobile = useMediaQuery({
    maxDeviceWidth: theme("breakpoints.1"),
  })

  const [shouldShowPlaceholder, setshouldShowPlaceholder] = useState(true)

  const hidePlaceholder = (): void => setshouldShowPlaceholder(false)
  const showPlaceholder = (): void => setshouldShowPlaceholder(Boolean(!value))

  return (
    <Box width="100%" position="relative">
      {(isMobile && isSafari) || !isSafari ? (
        <InputField
          name={name}
          type="date"
          bg="transparent"
          onFocus={hidePlaceholder}
          onBlur={showPlaceholder}
          color={shouldShowPlaceholder ? "transparent" : theme("colors.text.1")}
          shouldShowLabelPlaceholder={shouldShowPlaceholder}
          {...rest}
        />
      ) : (
        <InputTypeDate
          name={name}
          value={value}
          setFieldValue={setFieldValue}
          {...rest}
        />
      )}

      {shouldShowPlaceholder && !isSafari && (
        <SvgCalendar
          boxProps={{
            position: "absolute",
            top: "20px",
            right: "20px",
            cursor: "pointer",
            onClick: hidePlaceholder,
          }}
        />
      )}
    </Box>
  )
}
