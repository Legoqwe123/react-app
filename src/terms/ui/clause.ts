import styled from "styled-components"
import { Text } from "../../ui/text"
import { theme } from "../../theme/theme"

export const Clause = styled(Text)`
  font-size: 20px;
  line-height: 34px;
  margin-top: 30px;
  margin-bottom: 0;

  @media screen and (max-width: ${theme("breakpoints.1")}) {
    font-size: 16px;
    line-height: 28px;
    margin-top: 20px;
  }
`
