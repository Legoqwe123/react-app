import React, { ReactElement } from "react"
import { t } from "../../i18n/i18n"
import { theme } from "../../theme/theme"

import { SvgArrowBack } from "../../ui/icons/arrow-back"
import { Box, BoxProps } from "../../ui/box"
import { Text } from "../../ui/text"
import { SecondStepHeaderTitle } from "./second-step-header-title"
import { SecondStepHeaderText } from "./second-step-header-text"
import { Container } from "../../ui/container"
import { useHistory } from "react-router-dom"

interface Props {
  title?: string
  text?: string
  boxProps?: BoxProps
  backRoute: string
}

const underline = `${theme("borders[1]")} ${theme("colors.greys[0]")}`

export const SecondStepHeader = ({
  title,
  text,
  boxProps,
  backRoute,
}: Props): ReactElement => {
  const history = useHistory()

  return (
    <Box>
      <Box
        position="relative"
        p={["24px 35px", "24px 35px", "60px 192px 30px 192px"]}
        borderBottom={underline}
        {...boxProps}
      >
        <SvgArrowBack
          onClick={(): void => {
            history.push({ pathname: backRoute, state: history.location.state })
          }}
          style={{ position: "absolute", paddingTop: "5px" }}
        />

        <SecondStepHeaderTitle title={title} />

        {text !== "" && <SecondStepHeaderText text={text} />}
      </Box>

      {text !== "" && (
        <Container>
          <Text
            display={["none", "none", "block"]}
            px={["120px", "120px", "120px", "279px"]}
            mt="30px"
            mb="0"
            fontSize={3}
          >
            {t(text || "carLiability.step2.text")}
          </Text>
        </Container>
      )}
    </Box>
  )
}
