import React, { ReactElement } from "react"
import { HeaderPage } from "../ui/header.page"
import { Footer } from "../ui/footer/footer"
import { Header } from "./ui/header"
import { Testimonials } from "../ui/testimonials"
import { InsuranceCards } from "./ui/insurance-cards"
import { Partners } from "../ui/partners"
import { FeedbackForm } from "../ui/feedback.form"
import { Description } from "../ui/description/description"
import { PageContainer } from "../ui/page-container"
import { Container } from "../ui/container"
import { HorizontalLine } from "../ui/footer/horizontal-line"

export const MainPage = (): ReactElement => (
  <PageContainer>
    <Container>
      <HeaderPage />
    </Container>

    <Header />

    <Container>
      <Partners />

      <InsuranceCards mt={["50px", "50px", "50px", "50px", "69px"]} />

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
