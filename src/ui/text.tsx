import {
  space,
  color,
  layout,
  flexbox,
  gridArea,
  position,
  textStyle,
  colorStyle,
  typography,
  compose,
  fontWeight,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  TextStyleProps,
  TypographyProps,
  ColorStyleProps,
  GridAreaProps,
} from "styled-system"
import styled from "styled-components"
import { RestProps } from "../core"

export type TextProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  TextStyleProps &
  TypographyProps &
  ColorStyleProps &
  GridAreaProps &
  RestProps & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>
    children?: React.ReactNode | React.ReactNodeArray
    userSelect?: string
    wordBreak?: string
    cursor?: string
    borderBottom?: string
    textDecoration?: string
    whiteSpace?: string
    alignItems?: string
    wordWrap?: string
    transition?: string
  }

export const Text = styled.p<TextProps>`
  word-break: ${(p): string => p.wordBreak || "normal"};
  word-wrap: ${(p): string => p.wordWrap || "normal"};
  user-select: ${(p): string => p.userSelect || "auto"};
  cursor: ${(p): string => p.cursor || "default"};
  border-bottom: ${(p): string => p.borderBottom || "none"};
  text-decoration: ${(p): string => p.textDecoration || "none"};
  white-space: ${(p): string => p.whiteSpace || "normal"};
  align-items: ${(p): string => p.alignItems || "stretch"};
  transition: ${(p): string => p.transition || "none"};

  ${compose(
    color,
    space,
    layout,
    flexbox,
    gridArea,
    position,
    textStyle,
    colorStyle,
    typography,
    fontWeight,
  )};
`

Text.defaultProps = {
  as: "p",
  color: "text.1",
  fontFamily: "'Inter', sans-serif",
  wordBreak: "normal",
  userSelect: "auto",
  cursor: "default",
  textDecoration: "none",
  bg: "transparent",
}

Text.displayName = "Text"
