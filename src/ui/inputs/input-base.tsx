import {
  color,
  layout,
  position,
  space,
  border,
  borders,
  textStyle,
  colorStyle,
  typography,
  shadow,
  compose,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  BordersProps,
  PositionProps,
  TextStyleProps,
  TypographyProps,
  ShadowProps,
  ColorStyleProps,
} from "styled-system"
import styled from "styled-components"
import { ifProp, prop } from "styled-tools"

import { theme } from "../../theme/theme"
import { RestProps } from "../../core"

export type InputBaseProps = RestProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  BordersProps &
  PositionProps &
  TextStyleProps &
  TypographyProps &
  ShadowProps &
  ColorStyleProps & {
    name?: string
    placeholder?: string
    placeholderColor?: string
    children?: never
    ref?: React.RefObject<HTMLInputElement>
    isDateOfBirth?: boolean
  }

export const InputBase = styled.input<InputBaseProps>`
  outline: none;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;

  ::placeholder {
    color: ${ifProp(
      "placeholderColor",
      prop("placeholderColor"),
      theme("colors.text.1"),
    )};

    opacity: 1;
  }

  ::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
  }

  ::-webkit-inner-spin-button {
    z-index: 1;
    display: none;
  }

  :focus {
    ::-webkit-inner-spin-button {
      display: block;
    }

    ::placeholder {
      color: ${(props): string =>
        props.isDateOfBirth
          ? theme("colors.greys.3")
          : ifProp(
              "placeholderColor",
              prop("placeholderColor"),
              theme("colors.text.1"),
            )};
    }
  }

  ${compose(
    color,
    space,
    layout,
    border,
    shadow,
    borders,
    position,
    textStyle,
    colorStyle,
    typography,
  )}
`

InputBase.defaultProps = {
  type: "text",
  color: theme("colors.text.1"),
  border: `${theme("borders.1")} ${theme("colors.greys.0")}`,
  fontFamily: "'Inter', sans-serif",
  width: "100%",
  height: "60px",
  p: "13px 24px",
  borderRadius: "6px",
  value: "",
  fontSize: "18px",
  lineHeight: "34px",
  autoComplete: "off",
  required: true,
}

InputBase.displayName = "InputBase"
