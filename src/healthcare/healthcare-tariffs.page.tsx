import React, { ReactElement } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { t } from "../i18n/i18n"
import { useMediaQuery } from "react-responsive"
import { theme } from "../theme/theme"
import { TypeInsuranceEnum } from "../core/enums"
import get from "lodash/get"
import { healthcare } from "../routes"

import { Box } from "../ui/box"
import { HeaderPage } from "../ui/header.page"
import { Footer } from "../ui/footer/footer"
import { Text } from "../ui/text"
import { SvgMoney } from "../ui/icons/money"
import { SvgYearsOld } from "../ui/icons/years-old"
import { HealthTariffCards } from "./ui/health-tariff-cards"
import { getAge } from "../core/get-age"
import { getHealthTariffs } from "./health-tariffs"
import { Container } from "../ui/container"
import { HorizontalLine } from "../ui/footer/horizontal-line"
import { useLocation } from "../hooks/use-location"
import { useEmptyStateRedirect } from "../hooks/use-empty-state-redirect"
import { UserActions } from "../ui/user-actions"

const HealthCompaniesView = ({
  history,
}: RouteComponentProps): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })

  useEmptyStateRedirect(healthcare)

  const state = get(history, "location.state") || {}
  useLocation(state, healthcare)

  const { min, max, date } = state
  const age = getAge(date)

  return (
    <Box>
      <Container>
        <HeaderPage />
      </Container>

      <Text
        fontWeight="900"
        fontSize={[5, 7]}
        lineHeight={["26px", "48px"]}
        color="primary"
        ml={isMobile ? 0 : "185px"}
        textAlign={isMobile ? "center" : "left"}
        mt={["20px", "40px"]}
        mb={["36px", "30px"]}
      >
        {t("navigation.health")}
      </Text>

      <Box
        bg="blues.4"
        pt="15px"
        display="flex"
        flexDirection={["column", "column", "row"]}
        px={isMobile ? "35px" : "185px"}
        pb="15px"
      >
        <Box display="flex" flexWrap="wrap" flexGrow="1" alignItems="center">
          <Box
            display="flex"
            alignItems="flex-start"
            mb={["15px", "15px", 0]}
            mr={isMobile ? "35px" : "25px"}
          >
            <Box minWidth="15px">
              <SvgMoney />
            </Box>

            <Text ml="10px" fontSize={1} lineHeight="22px" my="0">
              {min &&
                max &&
                t("health.rangePrice", {
                  0: min,
                  1: max,
                })}
            </Text>
          </Box>

          <Box display="flex" alignItems="center" mb={["15px", "15px", 0]}>
            <SvgYearsOld />

            <Text ml="10px" fontSize={1} lineHeight="22px" my="0">
              {age
                ? t("health.yearsOld", {
                    0: age,
                  })
                : null}
            </Text>
          </Box>
        </Box>

        <UserActions
          insurance={TypeInsuranceEnum.HEALTH}
          mt={["5px", "5px", "8px"]}
        />
      </Box>

      <Container>
        <HealthTariffCards
          tariffs={getHealthTariffs(age, min, max)}
          mt="6px"
          typeInsurance={TypeInsuranceEnum.HEALTH}
          mx={["26px", "26px", "26px", "26px", "100px", "100px", "180px"]}
        />
      </Container>

      <HorizontalLine mt={isMobile ? "50px" : "100px"} />

      <Container>
        <Footer />
      </Container>
    </Box>
  )
}

export const HealthCompanies = withRouter(HealthCompaniesView)
