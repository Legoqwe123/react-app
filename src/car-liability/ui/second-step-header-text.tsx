import React, { ReactElement } from "react"
import { t } from "../../i18n/i18n"
import styled from "styled-components"

import { Text } from "../../ui/text"

interface Props {
  text?: string
}

const HeaderText = styled(Text)`
  @media (min-width: 375px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`

export const SecondStepHeaderText = ({ text }: Props): ReactElement => (
  <HeaderText
    display={["block", "block", "none"]}
    mt="20px"
    mb="0"
    fontSize={3}
    lineHeight="28px"
    textAlign="center"
  >
    {t(text || "carLiability.step2.text")}
  </HeaderText>
)
