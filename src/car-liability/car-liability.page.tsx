import React, { ReactElement } from "react"
import { Header } from "./ui/header"
import { HeaderForm } from "./ui/header-form"
import { Box } from "../ui/box"
import { HeaderPage } from "../ui/header.page"
import { Footer } from "../ui/footer/footer"
import { Testimonials } from "../ui/testimonials"
import { Partners } from "../ui/partners"
import { FeedbackForm } from "../ui/feedback.form"
import { Description } from "../ui/description/description"
import { PageContainer } from "../ui/page-container"
import { Container } from "../ui/container"
import { HorizontalLine } from "../ui/footer/horizontal-line"
import { root } from "../routes"
import { useHistory } from "react-router-dom"
import get from "lodash/get"
import { useLocation } from "../hooks/use-location"

export const CarLiabilityPage = (): ReactElement => {
  const history = useHistory()
  const state = get(history, "location.state") || {}
  useLocation(state, root)

  return (
    <PageContainer>
      <Container>
        <HeaderPage />

        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          mt={["20px", "20px", 0]}
        >
          <Header />

          <Partners
            wrapperProps={{
              display: ["flex", "flex", "none"],
              mb: "17px",
              mt: "46px",
            }}
          />

          <HeaderForm />
        </Box>

        <Partners
          wrapperProps={{ display: ["none", "none", "flex"], mt: "59px" }}
        />

        <Description boxProps={{ mt: ["39px", "46px", "35px"] }} />

        <Testimonials
          mt={["-38px", "-38px", 0]}
          mb={["16px", "16px", "-26px"]}
          pt={[0, 0, "33px"]}
        />

        <FeedbackForm mb={["80px", "80px", "124px"]} />
      </Container>

      <HorizontalLine />

      <Container>
        <Footer borderTop="none" />
      </Container>
    </PageContainer>
  )
}
