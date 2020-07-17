import React, { ReactElement } from "react"
import { Box } from "../ui/box"
import { HeaderPage } from "../ui/header.page"
import { Footer } from "../ui/footer/footer"
import { FeedbackForm } from "../ui/feedback.form"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"

export const FeedbackPage = (): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  return (
    <Box>
      <HeaderPage />

      <FeedbackForm mt={isMobile ? 0 : "48px"} pb={isMobile ? "50px" : 0} />

      {!isMobile && <Footer mt="114px" />}
    </Box>
  )
}
