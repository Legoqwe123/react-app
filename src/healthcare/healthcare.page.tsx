import React, { ReactElement } from "react"
import { Header } from "./header"
import { HeaderPage } from "../ui/header.page"
import { HealthHeaderForm } from "./ui/health-header-form"
import { Partners } from "../ui/partners"
import { Description } from "../ui/description/description"
import { FeedbackForm } from "../ui/feedback.form"
import { Testimonials } from "../ui/testimonials"
import { Footer } from "../ui/footer/footer"
import { PageContainer } from "../ui/page-container"
import { Box } from "../ui/box"
import { Container } from "../ui/container"
import { HorizontalLine } from "../ui/footer/horizontal-line"
import { root } from "../routes"
import { useHistory } from "react-router-dom"
import get from "lodash/get"
import { useLocation } from "../hooks/use-location"

export const HealthcarePage = (): ReactElement => {
  const history = useHistory()
  const state = get(history, "location.state") || {}
  useLocation(state, root)

  return (
    <PageContainer>
      <Container>
        <HeaderPage />
      </Container>

      <Header />

      <Container>
        <Partners />

        <Box display={["block", "block", "none"]}>
          <HealthHeaderForm isMobile />
        </Box>

        <Description />

        <Testimonials mt={["31px", "31px", "31px", "31px", "76px"]} />

        <FeedbackForm mt={["21px", "21px", "21px", "21px", "15px"]} />
      </Container>

      <HorizontalLine mt={["80px", "80px", "80px", "80px", "87px"]} />
      <Container>
        <Footer borderTop="none" />
      </Container>
    </PageContainer>
  )
}
