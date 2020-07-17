import React, { ReactElement } from "react"
import { Box } from "./box"
import { SvgArrowBack } from "./icons/arrow-back"
import { Text } from "../ui/text"
import { t } from "../i18n/i18n"
import { useHistory } from "react-router-dom"

interface Props {
  backRoute: string
}

export const HeaderInfoForm = ({ backRoute }: Props): ReactElement => {
  const history = useHistory()

  const handleBack = (): void => {
    history.push({
      pathname: backRoute,
      state: history.location.state,
    })
  }

  return (
    <Box
      pt={["20px", "20px", "20px", "20px", "60px"]}
      mx={["31px", "31px", "31px", "31px", "188px"]}
      display="flex"
    >
      <Box mt={["4px", "4px", null]}>
        <SvgArrowBack onClick={handleBack} />
      </Box>

      <Text
        fontWeight="900"
        fontSize={[5, 5, 7]}
        lineHeight={["26px", "26px", "48px"]}
        color="primary"
        mb={["30px", "30px", "30px", "30px", "28px"]}
        mt={[0, 0, 0, "54px"]}
        ml={[0, "15px", "15px", "15px", "65px"]}
        textAlign="center"
        maxWidth={["243px", "100%"]}
        mx={["auto", "auto", null]}
      >
        {t("general.information")}
      </Text>
    </Box>
  )
}
