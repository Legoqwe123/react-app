import React, { ReactElement } from "react"
import { Box } from "./box"
import { Text } from "./text"
import { InputField } from "./inputs/input-field"
import { t } from "../i18n/i18n"
import { Button } from "./buttons/button"
import { theme } from "../theme/theme"
import { useMediaQuery } from "react-responsive"
import { Form } from "formik"
import { getImagePath } from "../hooks/getImagePath"
import styled from "styled-components"

const StyledImg = styled("img")`
  max-width: 646px;
  max-height: 468px;
`

export const FeedbackView = (): ReactElement => {
  const isPreDesktop = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.2"),
  })

  return (
    <Form>
      <Box
        px={[0, "30px", "130px", "189px"]}
        display="flex"
        flexWrap={isMobile ? "wrap" : "no-wrap"}
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Box
          mt="61px"
          px={["5px", 0]}
          mr={["auto", "auto", "auto", isPreDesktop ? "40px" : "71px"]}
          mx={isMobile && "auto"}
          minWidth={[isMobile ? "315px" : "344px"]}
          order={isMobile ? 2 : 0}
        >
          <Text
            color="primary"
            fontSize={7}
            lineHeight="38px"
            fontWeight="bold"
            my={0}
            textAlign={isMobile ? "center" : "left"}
          >
            {t("feedback.title")}
          </Text>

          <Text mt="10px" mb="20px" textAlign={isMobile ? "center" : "left"}>
            {t("feedback.subTitle")}
          </Text>

          <InputField
            name="email"
            type="email"
            placeholder={t("general.email")}
          />

          <InputField
            name="message"
            placeholder={t("general.message")}
            height="135px"
            isTextArea
          />

          <Button
            text={t("general.submit")}
            width="100%"
            mt="4px"
            position="relative"
            zIndex={2}
          />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          width={isMobile ? "100%" : "auto"}
          mx={isMobile ? "auto" : 0}
          order={isMobile ? 1 : 0}
        >
          <StyledImg
            src={
              isPreDesktop
                ? getImagePath("feedback-mobile.png", true)
                : getImagePath("feedback.png")
            }
            alt=""
          />
        </Box>
      </Box>
    </Form>
  )
}
