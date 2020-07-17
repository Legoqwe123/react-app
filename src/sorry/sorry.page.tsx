import React, { ReactElement } from "react"
import { Box } from "../ui/box"
import { HeaderPage } from "../ui/header.page"
import { Header } from "./header"
import { Footer } from "../ui/footer/footer"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"
import { root } from "../routes"

export const SorryPage = (): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  useEmptyStateRedirect(root)

  return (
    <Box>
      <HeaderPage />
      <Header isMobile={isMobile} />
      <Footer mt={isMobile ? "60px" : "100px"} />
    </Box>
  )
}
