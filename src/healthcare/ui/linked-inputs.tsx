import React, {
  ReactElement,
  ChangeEvent,
  useRef,
  FocusEvent,
  useState,
  useEffect,
} from "react"
import styled from "styled-components"

import { Box } from "../../ui/box"
import { Text } from "../../ui/text"

import { InputField } from "../../ui/inputs/input-field"

import { theme } from "../../theme/theme"
import { t } from "../../i18n/i18n"
import { useMediaQuery } from "react-responsive"

interface Props {
  minName: string
  maxName: string
  setFieldValue: (field: string, value?: number, validate?: boolean) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: any
}

const StyledInput = styled(InputField)`
  width: 100%;
`

const PrefixLabel = styled(Text)`
  font-size: ${theme("fontSizes.3")};
  display: flex;
  align-items: center;
  color: ${theme("colors.greys.3")};
  position: absolute;
  margin-top: 0;
  margin-bottom: 0;
  top: 13px;
  left: 19px;
  width: 62px;
  height: 34px;
`

export const LinkedInputs = ({
  minName,
  maxName,
  setFieldValue,
  values,
}: Props): ReactElement => {
  const [minVolumePreviousValue, setMinVolumePreviousValue] = useState(0)
  const [maxVolumePreviousValue, setMaxVolumePreviousValue] = useState(1000)
  const minVolumeInputReference = useRef<HTMLInputElement>(null)
  const maxVolumeInputReference = useRef<HTMLInputElement>(null)

  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  const stopScroll = (): void => {
    minVolumeInputReference.current &&
      minVolumeInputReference.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      })
  }

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target

    if (/^\d*$/.test(value)) {
      if (value) {
        name === minName
          ? setMinVolumePreviousValue(+value)
          : setMaxVolumePreviousValue(+value)
      }

      setFieldValue(name, value ? +value : undefined)
    }
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    const { name } = event.target

    setFieldValue(
      name,
      name === minName ? minVolumePreviousValue : maxVolumePreviousValue,
    )
  }

  useEffect((): void => {
    stopScroll()
  }, [values.maxVolume, values.minVolume])

  return (
    <Box
      mt="30px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box position="relative">
        <StyledInput
          name={minName}
          type="tel"
          onChange={handleChangeValue}
          reference={minVolumeInputReference}
          onBlur={handleBlur}
          p={isMobile ? "13px 24px 13px 74px" : "13px 24px 13px 90px"}
        />

        <PrefixLabel>{t("general.from")}</PrefixLabel>
      </Box>

      <Box height="10px" minWidth="15px" />

      <Box position="relative">
        <StyledInput
          name={maxName}
          type="tel"
          onChange={handleChangeValue}
          reference={maxVolumeInputReference}
          onBlur={handleBlur}
          p={isMobile ? "13px 24px 13px 74px" : "13px 24px 13px 90px"}
        />

        <PrefixLabel>{t("general.to")}</PrefixLabel>
      </Box>
    </Box>
  )
}
