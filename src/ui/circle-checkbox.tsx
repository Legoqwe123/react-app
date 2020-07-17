import React, { ReactElement } from "react"
import styled from "styled-components"
import {
  space,
  alignItems,
  display,
  gridArea,
  SpaceProps,
  DisplayProps,
  GridAreaProps,
  AlignItemsProps,
  width,
  LayoutProps,
} from "styled-system"
import noop from "lodash/noop"

import { theme } from "../theme/theme"

type LabelProps = SpaceProps &
  GridAreaProps &
  DisplayProps &
  AlignItemsProps &
  LayoutProps

type Props = LabelProps & {
  isChecked?: boolean
  isDisabled?: boolean
  cursor?: string
  onToggle?: (isChecked: boolean) => void
  isValid?: boolean
  touched?: boolean
}

const CheckLabel = styled.label<Props>`
  margin: 0;
  display: flex;
  flex-direction: row;
  flex: none;
  align-items: flex-start;
  cursor: pointer;
  border: ${theme("borders.1") + theme("colors.greys.0")};
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50px;

  ${width}
  ${space}
  ${display}
  ${gridArea}
  ${alignItems}
`

const CheckInput = styled.input<Props>`
  appearance: none;
  -webkit-appearance: none;
  pointer-events: none;
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;

  :checked {
    border: 6px solid white;
    border-radius: 40px;
    background-color: ${theme("colors.greens.0")};
  }
`

export const CircleCheckBox = ({
  onToggle,
  isDisabled,
  isChecked,
  isValid,
  touched,
  ...rest
}: Props): ReactElement<Props> => (
  <CheckLabel {...(rest as LabelProps)}>
    <CheckInput
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
      onChange={(): void => onToggle && onToggle(!isChecked)}
      isValid={isValid}
      touched={touched}
    />
  </CheckLabel>
)

CircleCheckBox.defaultProps = {
  isChecked: false,
  isDisabled: false,
  onToggle: noop,
}
