import React, { ReactElement } from "react"
import { Box } from "../ui/box"
import { Text } from "../ui/text"
import { t } from "../i18n/i18n"
import { theme } from "../theme/theme"
import { Container } from "./ui/container"
import { PaymentCards } from "./ui/payment-cards"
import { useHistory } from "react-router-dom"
import get from "lodash/get"
import { useLocation } from "../hooks/use-location"
import { form } from "../car-liability/routes"
import { healthForm } from "../healthcare/routes"
import { comprehensiveCarForm } from "../comprehensive-car/routes"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"
import { root } from "../routes"

export const PaymentPage = (): ReactElement => {
  const history = useHistory()
  const state = get(history, "location.state") || {}

  useEmptyStateRedirect(root)

  const previousPage = ((): string => {
    if (state.brand) {
      return comprehensiveCarForm
    }

    if (state.purpose) {
      return form
    }

    return healthForm
  })()

  useLocation(state, previousPage)

  return (
    <Box pb={["177px", "100px"]}>
      <Box borderBottom={`${theme("borders.1")} ${theme("colors.greys.0")}`}>
        <Text
          my="30px"
          fontWeight="900"
          fontSize={[5, 7]}
          lineHeight={["26px", "48px"]}
          color="primary"
          textAlign="center"
        >
          {t("payment.title")}
        </Text>
      </Box>

      <Container>
        <Text lineHeight="14px" color="greys.5" mt={0} mb={["25px", "20px"]}>
          {t("payment.choose")}
        </Text>

        <PaymentCards />
      </Container>
    </Box>
  )
}
