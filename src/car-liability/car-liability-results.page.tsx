import React, { ReactElement } from "react"
import { useHistory } from "react-router-dom"
import get from "lodash/get"
import { form, secondStep } from "./routes"
import { companiesTariffs } from "../tariffs-data"
import { TypeInsuranceEnum } from "../core/enums"
import isEmpty from "lodash/isEmpty"
import { carLiability } from "../routes"

import { Box } from "../ui/box"
import { HeaderPage } from "../ui/header.page"
import { TariffCards } from "../ui/tariff-cards"
import { Footer } from "../ui/footer/footer"
import { ResultsTitle } from "./ui/results-title"
import { ResultsHeader } from "./ui/results-header"
import { Container } from "../ui/container"
import { HorizontalLine } from "../ui/footer/horizontal-line"
import { useLocation } from "../hooks/use-location"
import { InsuranceVariant } from "../core"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"

export const CarLiabilityResultsPage = (): ReactElement => {
  const history = useHistory()
  const state = get(history, "location.state") || {}
  useLocation(state, secondStep)
  useEmptyStateRedirect(carLiability)

  const {
    purpose,
    seats,
    personalInsurance,
    voluntaryLiabilityInsurance,
    tonnage,
  } = state

  const selectTariff = (
    total: number,
    companyName: string,
    variant: InsuranceVariant,
  ): void =>
    history.push({
      pathname: form,
      state: { ...state, total, companyName, variant },
    })

  return (
    <Box>
      <Container>
        <HeaderPage />
      </Container>
      <ResultsTitle />

      {!isEmpty(state) && (
        <ResultsHeader
          purpose={purpose}
          seats={seats}
          personalNumber={personalInsurance.personalNumber}
          voluntaryLiabilityInsurance={voluntaryLiabilityInsurance}
          tonnage={tonnage}
        />
      )}

      <Container>
        <TariffCards
          tariffs={companiesTariffs}
          selectTariff={selectTariff}
          typeInsurance={TypeInsuranceEnum.LIABILITY}
          mx={["26px", "26px", "26px", "26px", "100px", "100px", "180px"]}
        />
      </Container>

      <HorizontalLine mt={["97px", "97px", "100px"]} />

      <Container>
        <Footer borderTop="none" />
      </Container>
    </Box>
  )
}
