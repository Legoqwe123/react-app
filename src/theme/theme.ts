import { normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"

import { colors } from "./colors"
import { shadows } from "./shadows"
import { textStyles } from "./textStyles"
import { transitions } from "./transitions"
import { borders } from "./borders"
import get from "lodash/get"

export const AppTheme = {
  breakpoints: ["40em", "58em", "70em", "80em", "86em", "90em"],
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 40],
  colors,
  textStyles,
  shadows,
  transitions,
  borders,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const theme = (path: string): any => get(AppTheme, path, null)

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    background-color: #FFFFFF;
  }

  .Toastify__toast {
    text-align: center;
    font-family: 'Inter', sans-serif;
    

    @media (max-width: ${theme("breakpoints.0")}) {
      height: 100px;
      font-size: 1.6em;
    }
  }
`
