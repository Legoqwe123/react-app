import React, { ReactElement } from "react"
import { HealthTariff } from "../../core"
import { useMediaQuery } from "react-responsive"
import { theme } from "../../theme/theme"
import { useShowSpinner } from "../../hooks/use-spinner"
import { TypeInsuranceEnum } from "../../core/enums"
import { useIntl } from "react-intl"

import { Box, BoxProps } from "../../ui/box"
import { TariffCard } from "../../ui/tariff-card"
import { Spinner } from "../../ui/spinner"
import { getHealthFields } from "../health-tariffs"

type Props = BoxProps & {
  tariffs: HealthTariff[]
  typeInsurance: TypeInsuranceEnum
  minHeight?: string | string[]
  selectTariff?: (total: number) => void
}

export const HealthTariffCards = ({
  tariffs,
  minHeight,
  typeInsurance,
  selectTariff,
  ...rest
}: Props): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })
  const language: string = useIntl().locale

  const isLoading = useShowSpinner()

  console.log(tariffs)

  return isLoading ? (
    <Spinner />
  ) : (
    <Box
      display="flex"
      mx={isMobile ? "26px" : "180px"}
      justifyContent="center"
      flexWrap="wrap"
      {...rest}
    >
      {tariffs &&
        tariffs.length > 0 &&
        tariffs.map((tariff: HealthTariff, index: number) => {
          const packageName = language === "en" ? tariff.nameEN : tariff.nameVI

          const fields = getHealthFields(
            language === "en" ? tariff.benefitsEN : tariff.benefitsVI,
          )

          return (
            <TariffCard
              key={index}
              typeInsurance={typeInsurance}
              imagePath={String(tariff.image)}
              rating={Number(tariff.rating)}
              fields={fields}
              total={tariff.price}
              minHeight={minHeight}
              selectTariff={selectTariff}
              years={tariff.years}
              packageName={packageName}
              company={tariff.company}
            />
          )
        })}
    </Box>
  )
}
