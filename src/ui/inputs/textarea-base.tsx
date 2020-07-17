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
} from "styled-system"
import styled from "styled-components"
import { ifProp, prop } from "styled-tools"

import { InputBaseProps } from "./input-base"

import { theme } from "../../theme/theme"
import { colors } from "../../theme/colors"

export const TextareaBase = styled.textarea<InputBaseProps>`
  outline: none;
  background-color: transparent;
  box-sizing: border-box;
  appearance: none;
  resize: none;

  ::placeholder {
    color: ${ifProp(
      "placeholderColor",
      prop("placeholderColor"),
      theme("colors.text.1"),
    )};

    opacity: 1;
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

TextareaBase.defaultProps = {
  type: "text",
  color: "text.1",
  border: [1],
  p: "14px 24px",
  borderRadius: "6px",
  borderColor: "greys.0",
  fontSize: [3],
  fontFamily: "'Inter', sans-serif",
  lineHeight: "34px",
  placeholderColor: colors.text[1],
  width: "100%",
  value: "",
  autoComplete: "",
  required: true,
}

TextareaBase.displayName = "TextareaBase"
