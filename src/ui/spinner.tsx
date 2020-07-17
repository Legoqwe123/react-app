import { Box } from "./box"
import styled from "styled-components"
import { theme } from "../theme/theme"

export const Spinner = styled(Box)`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid ${theme("colors.primary")};
  transform: translateZ(0);
  animation: spinnerLoad 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @keyframes spinnerLoad {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
