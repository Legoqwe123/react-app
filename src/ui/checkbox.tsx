import React from "react"
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
  children?: React.ReactNode
  isValid?: boolean
  touched?: boolean
}

const CheckLabel = styled.label<Props>`
  margin: 0;
  display: flex;
  flex-direction: row;
  flex: none;
  align-items: flex-start;
  cursor: ${(p): string => p.cursor || "pointer"};
  
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
  border: 0;
  background-color: transparent;

  & + i {
    border: ${(p): string => {
      if (!p.isValid && p.touched) {
        return theme("borders.1") + theme("colors.primary")
      }

      if (p.checked) {
        return theme("borders.0")
      }

      return theme("borders.1") + theme("colors.greys.0")
    }};
  }

  :focus + i {
    border: ${theme("borders.1") + theme("colors.greens.0")};
  }

  :checked + i {
    background-color: ${theme("colors.greens.0")};
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='12' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.6138 0.210585C14.0498 0.549578 14.1285 1.17784 13.7895 1.61385L6.01453 11.6138C5.84138 11.8365 5.58223 11.9758 5.30094 11.9972C5.01966 12.0186 4.74242 11.9202 4.53757 11.7262L0.312502 7.72623C-0.0885582 7.34653 -0.105878 6.71361 0.273818 6.31255C0.653514 5.91149 1.28644 5.89417 1.6875 6.27386L5.11216 9.51608L12.2105 0.386246C12.5495 -0.0497617 13.1778 -0.128408 13.6138 0.210585Z' fill='white'/%3E%3C/svg%3E%0A");
  }

  :disabled + i {
    cursor: not-allowed;
    border: ${theme("borders.1") + theme("colors.greys.0")};
  }

  :checked:disabled + i {
    cursor: default;
    background-color: ${theme("colors.greys.0")};
  }
`

const CheckIcon = styled.i`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${theme("colors.white")};
  border-radius: 6px;
`

export const CheckBox = ({
  children,
  onToggle,
  isDisabled,
  isChecked,
  isValid,
  touched,
  ...rest
}: Props): React.ReactElement<Props> => (
  <CheckLabel {...(rest as LabelProps)}>
    <CheckInput
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
      onChange={(): void => onToggle && onToggle(!isChecked)}
      isValid={isValid}
      touched={touched}
    />
    <CheckIcon />
    {children}
  </CheckLabel>
)

CheckBox.defaultProps = {
  isChecked: false,
  isDisabled: false,
  onToggle: noop,
}
