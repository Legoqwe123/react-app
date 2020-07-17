import React, { ReactElement } from "react"
import { Box } from "../box"

import { SvgClose } from "../inputs/close"
import { LeftNavContent } from "./left-nav-content"
import { LeftNavFooter } from "./left-nav-footer"
import styled from "styled-components"

interface Props {
  close: () => void
}

const StyledBox = styled(Box)`
  overflow-y: auto;
  overflow-x: hidden;
`

export const LeftNavTemplate = ({ close }: Props): ReactElement => (
  <StyledBox
    position="fixed"
    zIndex={10}
    as="aside"
    top={0}
    left={0}
    bg="primary"
    height="100vh"
    width="100vw"
    pt="25px"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
  >
    <SvgClose
      box={{
        position: "absolute",
        top: "25px",
        right: "30px",
        height: "24px",
        cursor: "pointer",
        onClick: close,
      }}
    />

    <LeftNavContent close={close} />

    <LeftNavFooter />
  </StyledBox>
)
