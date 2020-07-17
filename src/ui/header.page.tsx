import React, { ReactElement } from "react"
import { Box } from "./box"
import { Logo } from "./icons/logo"
import { HeaderNavList } from "./header-nav-list"
import { Link } from "react-router-dom"
import { root } from "../routes"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"
import { SvgBurger } from "./icons/burger"
import { useToggle } from "../hooks/use-toggle"
import { LeftNavTemplate } from "./sidebar/left-nav-template"
import { LangSelect } from "./lang-select"

export const HeaderPage = (): ReactElement => {
  const [isOpenSidebar, open, close] = useToggle()

  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  return (
    <Box
      width="100%"
      px={isMobile ? "24px" : "182px"}
      pt={isMobile ? "20px" : "10px"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to={root}>
        <Logo />
      </Link>

      <Box display="flex" alignItems="center">
        {isMobile ? (
          <SvgBurger
            box={{ cursor: "pointer", onClick: open, order: isMobile ? 2 : 0 }}
          />
        ) : (
          <HeaderNavList />
        )}

        <LangSelect isMobile={isMobile} order={isMobile ? 1 : 0} />
      </Box>

      {isOpenSidebar && <LeftNavTemplate close={close} />}
    </Box>
  )
}
