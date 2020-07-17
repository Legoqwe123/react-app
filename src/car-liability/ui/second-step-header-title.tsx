import React, { ReactElement } from "react"
import { t } from "../../i18n/i18n"
import styled from "styled-components"
import { theme } from "../../theme/theme"

import { Text } from "../../ui/text"

interface Props {
  title?: string
}

const HeaderTitle = styled(Text)`
  padding-left: 30px;
  padding-right: 30px;

  @media (min-width: 375px) {
    padding-left: 53px;
    padding-right: 53px;
  }

  @media (min-width: ${theme("breakpoints.1")}) {
    padding-left: 87px;
    padding-right: 0;
  }

  @media (min-width: ${theme("breakpoints.2")}) {
    padding-right: 87px;
  }
`

export const SecondStepHeaderTitle = ({ title }: Props): ReactElement => (
  <HeaderTitle
    m={["6px 0 0 0", "6px 0 0 0", "42px 0 0 0"]}
    fontSize={[5, 5, 7]}
    fontWeight="900"
    lineHeight={["26px", "26px", "48px"]}
    textAlign={["center", "center", "left"]}
    color="primary"
  >
    {t(title || "carLiability.step2.title")}
  </HeaderTitle>
)
