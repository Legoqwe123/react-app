import React, { ReactElement } from "react"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"

import { Box } from "../ui/box"
import { HeaderPage } from "../ui/header.page"
import { Header } from "./header"
import { Partners } from "../ui/partners"
import { Description } from "../ui/description/description"
import { Testimonials } from "../ui/testimonials"
import { FeedbackForm } from "../ui/feedback.form"
import { Footer } from "../ui/footer/footer"
import { ComprehensiveCarHeaderForm } from "./ui/comprehensive-car-header-form"
import { Container } from "../ui/container"
import { HorizontalLine } from "../ui/footer/horizontal-line"
import { useHistory } from "react-router-dom"
import { root } from "../routes"
import get from "lodash/get"
import { useLocation } from "../hooks/use-location"

export const ComprehensiveCarPage = (): ReactElement => {
  const isMobile = !useMediaQuery({
    minWidth: theme("breakpoints.3"),
  })

  const history = useHistory()
  const state = get(history, "location.state") || {}
  useLocation(state, root)

  return (
    <Box>
      <Container>
        <HeaderPage />
      </Container>

      <Header isMobile={isMobile} />

      <Container>
        <Partners />

        <Box display={["block", "bloxk", "none"]}>
          <ComprehensiveCarHeaderForm />
        </Box>

        <Description />

        <Testimonials mt={["31px", "31px", "31px", "31px", "76px"]} />

        <FeedbackForm mt={["21px", "21px", "21px", "21px", "15px"]} />
      </Container>

      <HorizontalLine mt={["80px", "80px", "80px", "80px", "87px"]} />

      <Container>
        <Footer borderTop="none" />
      </Container>
    </Box>
  )
}
