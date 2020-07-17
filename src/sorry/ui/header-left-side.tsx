import React, { ReactElement } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

import { Box } from "../../ui/box"
import { Text } from "../../ui/text"
import { t } from "../../i18n/i18n"
import { SorryImage } from "./sorry-image"
import { Button } from "../../ui/buttons/button"
import { theme } from "../../theme/theme"
import { feedback } from "../../routes"
import get from "lodash/get"

type Props = RouteComponentProps & {
  isMobile: boolean
}

export const HeaderLeftSide = withRouter(
  ({ isMobile, history }: Props): ReactElement => {
    const isSmallImg = useMediaQuery({
      maxWidth: theme("breakpoints.0"),
    })

    const locationState: any = history.location.state
    const name = get(locationState, "name", "")

    const handleClick = (): void => {
      history.push(feedback)
    }

    return (
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Box
          ml={isMobile ? 0 : "180px"}
          display={isMobile ? "flex" : "block"}
          flexDirection="column"
          alignItems="center"
        >
          <Text
            color="red"
            fontWeight="bold"
            fontSize={isSmallImg ? 6 : 8}
            lineHeight={isSmallImg ? "32px" : "45px"}
            my={0}
            px={isMobile ? "36px" : 0}
            textAlign={isMobile ? "center" : "left"}
            width={isMobile ? "303px" : "349px"}
          >
            {isMobile ? t("sorry.titleMobile") : t("sorry.title")}
          </Text>

          <Text
            fontSize={4}
            lineHeight={isMobile ? "28px" : "34px"}
            mb={0}
            mt="14px"
            px={isSmallImg ? "45px" : 0}
            textAlign={isMobile ? "center" : "left"}
            width={isMobile ? "305px" : "433px"}
          >
            {t("sorry.description", {
              0: name,
            })}
          </Text>

          {!isMobile && (
            <Button
              text={t("sorry.giveFeedback")}
              width="253px"
              mt="30px"
              mx="auto"
              onClick={handleClick}
            />
          )}
        </Box>

        <SorryImage isSmallImg={isSmallImg} isMobile={isMobile} />

        {isMobile && (
          <Box mt="50px" mx="auto" width="314px">
            <Button
              text={t("sorry.giveFeedback")}
              width="100%"
              onClick={handleClick}
            />
          </Box>
        )}
      </Box>
    )
  },
)
