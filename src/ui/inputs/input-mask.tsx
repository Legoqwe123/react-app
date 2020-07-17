import React from "react"
import MaskedInput, { MaskedInputProps } from "react-text-mask"

import { InputBase, InputBaseProps } from "./input-base"
import { RestProps } from "../../core"

type Props = RestProps &
  MaskedInputProps &
  InputBaseProps & { children?: never }

type inputRef =
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined

export const InputMask = ({
  mask,
  guide,
  showMask,
  placeholderChar,
  keepCharPositions,
  pipe,
  value,
  onBlur,
  onChange,
  ...rest
}: Props): React.ReactElement => (
  <MaskedInput
    pipe={pipe}
    mask={mask}
    guide={guide}
    showMask={showMask}
    placeholderChar={placeholderChar}
    keepCharPositions={keepCharPositions}
    render={(reference, props: MaskedInputProps): React.ReactElement => {
      const handleBlur = (event: any): void => {
        props.onBlur && props.onBlur(event)
        onBlur && onBlur(event)
      }

      const handleChange = (
        event: React.FocusEvent<HTMLInputElement>,
      ): void => {
        props.onChange && props.onChange(event)
        onChange && onChange(event)
      }

      const handleClick = (event: React.FocusEvent<HTMLInputElement>): void => {
        const target = event.target
        const index = target.value.search(/_/)

        const nextDigit =
          target.selectionStart && +target.value[target.selectionStart]
        const previousDigit =
          target.selectionStart && +target.value[target.selectionStart - 1]

        if (!nextDigit && !previousDigit) {
          setTimeout((): void => target.setSelectionRange(index, index), 0)
        }
      }

      return (
        <InputBase
          ref={reference as inputRef}
          onBlur={handleBlur}
          onChange={handleChange}
          onClick={rest.name === "phone" ? handleClick : undefined}
          value={value}
          {...rest}
        />
      )
    }}
  />
)
