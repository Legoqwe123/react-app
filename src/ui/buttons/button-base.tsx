import React from "react"
import {
  background,
  color,
  border,
  flexbox,
  layout,
  position,
  space,
  grid,
  typography,
  buttonStyle,
  SpaceProps,
  GridProps,
  LayoutProps,
  OpacityProps,
  FlexboxProps,
  BordersProps,
  PositionProps,
  TypographyProps,
  BackgroundProps,
  ButtonStyleProps,
} from "styled-system"
import styled, { css } from "styled-components"
import { switchProp } from "styled-tools"

import { theme } from "../../theme/theme"
import map from "lodash/map"
import { PX } from "../../core/constants"
import { RestProps } from "../../core"

export type ButtonBaseProps = OpacityProps &
  SpaceProps &
  GridProps &
  LayoutProps &
  FlexboxProps &
  BordersProps &
  PositionProps &
  TypographyProps &
  BackgroundProps &
  ButtonStyleProps &
  RestProps & {
    cursor?: string
    variant?: "primary" | "outline" | "result" | "compare"
    children?: React.ReactNode | React.ReactNodeArray
  }

export const ButtonBase = styled.button<ButtonBaseProps>`
  cursor: ${(p): string => (p.disabled || !p.cursor ? "default" : p.cursor)};
  opacity: ${(p): number => (p.disabled ? 0.5 : 1)};
  min-width: 0;
  font-style: normal;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  border-radius: 40px;
  padding: 8px 16px;
  text-align: center;
  font-size: ${`${theme("fontSizes[4]")}${PX}`};
  line-height: 34px;
  
  transition: ${map(
    [
      "opacity",
      "color",
      "background",
      "box-shadow",
      "fill",
      "stroke",
      "border",
    ],
    (property: string): string => `${property} ${theme("transitions.primary")}`,
  ).join(", ")};
   
    ${switchProp("variant", {
      primary: css`
        border: none;
        padding-top: 12px;
        padding-bottom: 12px;
        color: ${theme("colors.white")};
        font-weight: bold;
        background-color: ${theme("colors.primary")};

        &:hover {
          background-color: ${theme("colors.blues[3]")};
        }

        &:active {
          background-color: ${theme("colors.greens[0]")};
        }
      `,
      outline: css`
        background-color: ${theme("colors.white")};
        border: ${`${theme("borders[1]")} ${theme("colors.primary")}`};
        color: ${theme("colors.primary")};
        font-weight: bold;
        font-size: ${`${theme("fontSizes[4]")}${PX}`};

        &:hover {
          border: ${`${theme("borders[1]")} ${theme("colors.greens[0]")}`};
          color: ${theme("colors.greens[0]")};
        }

        &:active {
          background-color: ${theme("colors.greens[0]")};
          color: ${theme("colors.white")};
        }
      `,
      compare: css`
        border: none;
        padding-left: 7px;
        padding-right: 7px;
        font-size: ${`${theme("fontSizes[3]")}${PX}`};
        background-color: ${theme("colors.white")};
        color: ${theme("colors.primary")};

        &:hover {
          color: ${theme("colors.greens[0]")};
        }

        &:active {
          color: ${theme("colors.white")};
          background-color: ${theme("colors.greens[0]")};
        }
      `,
      result: css`
        background-color: ${theme("colors.greens[0]")};
        color: ${theme("colors.white")};
        font-size: ${theme("fontSizes[3]")};
        border: none;
        padding-left: 7px;
        padding-right: 7px;

        &:hover {
          background-color: ${theme("colors.greens[1]")};
        }

        &:active {
          background-color: ${theme("colors.primary")};
        }
      `,
    })}

    ${color}
    ${space}
    ${layout}
    ${border}
    ${flexbox}
    ${position}
    ${typography}
    ${background}
    ${buttonStyle}
    ${grid}
`

ButtonBase.defaultProps = {
  variant: "primary",
  cursor: "pointer",
}

ButtonBase.displayName = "ButtonBase"
