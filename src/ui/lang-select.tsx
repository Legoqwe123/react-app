import React, { ReactElement } from "react"
import { Box, BoxProps } from "./box"
import { Text } from "./text"
import styled from "styled-components"
import Cookies from "js-cookie"
import { Langs } from "../core/enums"
import { DEFAULT_LANG } from "../core/constants"
import { t } from "../i18n/i18n"
import { gtagChangeLang } from "../core/gtag"

type Props = BoxProps & {
  isMobile: boolean
}

const Root = styled(Box)`
  @media screen and (max-width: 1410px) {
    margin-left: 30px;
  }
`

export const LangSelect = ({ isMobile, ...rest }: Props): ReactElement => {
  const navigatorLang = window.navigator.language.slice(-2)

  const lang =
    Cookies.get("lang") ||
    (navigatorLang === Langs.VI || navigatorLang === Langs.EN
      ? navigatorLang
      : DEFAULT_LANG)

  const nextLang = lang === Langs.EN ? Langs.VI : Langs.EN

  const handleChangeLang = (): void => {
    Cookies.set("lang", nextLang)
    gtagChangeLang(nextLang)

    window.location.reload()
  }

  return (
    <Root
      display="flex"
      alignItems="center"
      ml={[0, 0, 0, "58px"]}
      mr={isMobile ? "40px" : 0}
      {...rest}
    >
      <Text cursor="pointer" onClick={handleChangeLang}>
        {t("general.lang")}
      </Text>
    </Root>
  )
}
