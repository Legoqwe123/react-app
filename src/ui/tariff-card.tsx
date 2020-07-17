import React, { ReactElement, Fragment } from "react"
import styled from "styled-components"
import { t } from "../i18n/i18n"
import { Indexer, InsuranceVariant } from "../core"
import { theme } from "../theme/theme"
import { useHistory } from "react-router-dom"
import { healthForm } from "../healthcare/routes"
import { formatPrice } from "../core/convert-price"

import { Box } from "./box"
import { Text } from "./text"
import { Button } from "./buttons/button"
import { CompaniesTariffCarHeader } from "./tariff-card-header"
import { TariffCardHealthHeader } from "./tariff-card-health-header"
import { TariffCardContent } from "./tariff-card-content"
import { TypeInsuranceEnum } from "../core/enums"
import { Voucher } from "./voucher"
import { companiesWithVoucher } from "../tariffs-data"
import { analyticsResult } from "../core/analytics-events"
import isEmpty from "lodash/isEmpty"

interface Props {
  typeInsurance: TypeInsuranceEnum
  imagePath: string
  rating: number
  fields: Indexer
  total: number
  minHeight?: string | string[]
  packageName?: string
  years?: string
  company: string
  selectTariff?: (
    total: number,
    companyName: string,
    variant: InsuranceVariant,
  ) => void
}

export const Delimiter = styled(Box)`
  border-bottom: ${`${theme("borders.2")} ${theme("colors.greys.0")}`};
  opacity: 0.44;
`

export const TariffCard = ({
  imagePath,
  rating,
  fields,
  total,
  packageName,
  years,
  company,
  minHeight,
  typeInsurance,
  selectTariff,
}: Props): ReactElement => {
  const history = useHistory()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locationState: any = history.location.state

  const shouldShowVoucher: boolean =
    typeInsurance === TypeInsuranceEnum.LIABILITY &&
    companiesWithVoucher.includes(company)

  const isHealth = typeInsurance === TypeInsuranceEnum.HEALTH

  const handleClick = (): void => {
    const variant = {
      PA: !isEmpty(locationState.personalInsurance),
      VL: !!locationState.voluntaryLiabilityInsurance,
      CL: !!locationState.civilLiabilityInsurance,
    }

    analyticsResult(company, typeInsurance, variant, total, shouldShowVoucher)

    if (selectTariff) {
      selectTariff(total, company, variant)
      return
    }

    history.push({
      pathname: healthForm,
      state: {
        ...locationState,
        nameInsurance: t("tariffCard.comprehensiveHealthInsurance", {
          0: company,
        }),
        packageName,
        years: t("tariffCard.years", { 0: years }),
        options: fields,
        total,
        variant,
        companyName: company,
      },
    })
  }

  return (
    <Box
      boxShadow="card"
      borderRadius="15px"
      width={["309px", "339px"]}
      minHeight={minHeight}
      pb="30px"
      mx="8px"
      mt="30px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <CompaniesTariffCarHeader
          imagePath={imagePath}
          rating={rating}
          company={company}
        />

        <Delimiter />

        {isHealth && (
          <Fragment>
            <TariffCardHealthHeader
              years={years}
              packageName={packageName}
              company={company}
            />

            <Delimiter />
          </Fragment>
        )}

        <TariffCardContent fields={fields} isHealth={isHealth} />
      </Box>

      {shouldShowVoucher && <Voucher />}

      <Box>
        <Text
          fontWeight="bold"
          fontSize={4}
          lineHeight="32px"
          textAlign="center"
          mt={shouldShowVoucher ? "7px" : "1em"}
        >
          {t("tariffCard.total", {
            0: formatPrice(total),
          })}
        </Text>

        <Button
          text={t("general.select")}
          variant="result"
          width="144px"
          mx="auto"
          px="44px"
          py="2px"
          display="flex"
          justifyContent="center"
          fontSize={3}
          lineHeight="34px"
          onClick={handleClick}
        />
      </Box>
    </Box>
  )
}
