import React from "react"
import {
  grid,
  background,
  color,
  border,
  flexbox,
  layout,
  position,
  space,
  typography,
  shadow,
  overflow,
  compose,
  GridProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  ShadowProps,
  FlexboxProps,
  BordersProps,
  OverflowProps,
  PositionProps,
  TypographyProps,
  BackgroundProps,
} from "styled-system"
import styled, { css } from "styled-components"
import { ifProp, prop } from "styled-tools"

import { theme } from "../theme/theme"
import { RestProps } from "../core"

export type BoxProps = GridProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  ShadowProps &
  FlexboxProps &
  BordersProps &
  OverflowProps &
  PositionProps &
  TypographyProps &
  BackgroundProps &
  RestProps & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>
    children?: React.ReactNode
    cursor?: string
    userSelect?: string
  }

export const Box = styled.div<BoxProps>`
  outline: none;
  min-width: 0;
  box-sizing: border-box;
  cursor: ${(p): string => p.cursor || "default"};
  transition: opacity ${theme("transitions.primary")};
  user-select: ${(p): string => p.userSelect || "auto"};

  ${ifProp(
    "overflowY",
    css`
      overflow-y: ${prop("overflowY")};
    `,
  )}

  ${compose(
    grid,
    color,
    space,
    layout,
    border,
    shadow,
    flexbox,
    overflow,
    position,
    typography,
    background,
  )}
`
Box.defaultProps = {
  cursor: "default",
  bg: "transparent",
}

Box.displayName = "Box"
