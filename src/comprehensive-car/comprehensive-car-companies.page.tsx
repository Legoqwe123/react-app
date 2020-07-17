import React, { ReactElement, useState } from "react"
import { useHistory } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"
import { t } from "../i18n/i18n"
import { comprehensiveCarForm, personalAccidentInsurance } from "./routes"
import { companiesTariffs } from "../tariffs-data"
import { TypeInsuranceEnum } from "../core/enums"
import { comprehensiveCar } from "../routes"

import { Box } from "../ui/box"
import { Text } from "../ui/text"
import { HeaderPage } from "../ui/header.page"
import { InsuranceInformation } from "./ui/insurance-information"
import { Footer } from "../ui/footer/footer"
import { TariffCards } from "../ui/tariff-cards"
import { Container } from "../ui/container"
import { HorizontalLine } from "../ui/footer/horizontal-line"
import { useLocation } from "../hooks/use-location"
import { InsuranceVariant } from "../core"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"
import { UpdateDeductibleForm } from "./ui/update-deductible.form"

export const ComprehensiveCarCompaniesPage = (): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  const history = useHistory()
  const state: any = history.location.state
  useLocation(state || {}, personalAccidentInsurance)
  useEmptyStateRedirect(comprehensiveCar)
  const initialDeductibleValue = state ? state.deductible : undefined
  const [deductible, setDeductible] = useState(initialDeductibleValue)

  const [isUpdating, setIsUpdating] = useState<boolean>(false)

  const selectTariff = (
    total: number,
    companyName: string,
    variant: InsuranceVariant,
  ): void =>
    history.push({
      pathname: comprehensiveCarForm,
      state: {
        ...state,
        deductible,
        total,
        companyName,
        variant,
      },
    })

  const handleChange = (value: string): void => {
    setIsUpdating(true)
    setDeductible(value)
  }

  return (
    <Box>
      <HeaderPage />

      <Text
        fontWeight="900"
        fontSize={isMobile ? 5 : 7}
        lineHeight={isMobile ? "32px" : "48px"}
        color="primary"
        ml={isMobile ? 0 : "185px"}
        textAlign={isMobile ? "center" : "left"}
        mt={isMobile ? "27px" : "46px"}
        mb={isMobile ? "25px" : "30px"}
        px={isMobile ? "24px" : null}
      >
        {isMobile ? t("navigation.comprehensiveCar") : t("main.carInsurance")}
      </Text>

      <InsuranceInformation isMobile={isMobile} />

      <Container>
        <UpdateDeductibleForm
          initialValue={initialDeductibleValue}
          handleChange={handleChange}
        />
        <TariffCards
          tariffs={companiesTariffs}
          minHeight={isMobile ? "290px" : "370px"}
          selectTariff={selectTariff}
          typeInsurance={TypeInsuranceEnum.COMPREHENSIVE}
          mx={["26px", "26px", "26px", "26px", "100px", "100px", "180px"]}
          deductible={deductible}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
        />
      </Container>

      <HorizontalLine mt={isMobile ? "50px" : "100px"} />
      <Container>
        <Footer />
      </Container>
    </Box>
  )
}
