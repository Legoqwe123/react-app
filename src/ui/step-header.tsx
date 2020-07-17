import React, { ReactElement } from "react"
import { Box } from "./box"
import { SvgArrowBack } from "./icons/arrow-back"
import { Text } from "../ui/text"
import { t } from "../i18n/i18n"
import { useHistory } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"

interface Props {
  title: string
  steps: number[]
  description: string
  backRoute: string
}

export const StepHeader = ({
  title,
  steps,
  description,
  backRoute,
}: Props): ReactElement => {
  const history = useHistory()
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.0"),
  })

  const handleClickBack = (): void => {
    history.push({
      pathname: backRoute,
      state: history.location.state,
    })
  }
  return (
    <Box
      pt={["20px", "20px", "66px"]}
      mx={["31px", "31px", "31px", "31px", "188px"]}
      display="flex"
      position="relative"
    >
      <Box position="absolute">
        <SvgArrowBack onClick={handleClickBack} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        ml={[0, "82px", "86px"]}
        alignItems={isMobile ? "center" : "flex-start"}
        mx={isMobile ? "auto" : undefined}
      >
        <Text
          fontSize={1}
          mt="0px"
          mb={isMobile ? "2px" : "10px"}
          lineHeight="28px"
          color="greys.1"
        >
          {t("general.step", { 0: steps[0], 1: steps[1] })}
        </Text>
        <Text
          fontWeight="900"
          fontSize={isMobile ? 5 : 7}
          lineHeight={isMobile ? "26px" : "48px"}
          color="primary"
          mt="0px"
          mb={isMobile ? "4px" : "10px"}
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          fontSize="3"
          lineHeight="28px"
          mt="0px"
          mb={isMobile ? "20px" : "30px"}
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}
