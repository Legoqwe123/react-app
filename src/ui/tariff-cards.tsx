import React, { ReactElement, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import { useLocation } from "react-router-dom"
import get from "lodash/get"

import {
  getTariffFields,
  getCarLiabilityTotal,
  getComprehensiveCarTotal,
} from "../tariffs-data"
import { TypeInsuranceEnum } from "../core/enums"
import { theme } from "../theme/theme"
import { useShowSpinner } from "../hooks/use-spinner"
import { Box, BoxProps } from "./box"
import { TariffCard } from "./tariff-card"
import { Spinner } from "./spinner"
import { CompanyTariff, InsuranceVariant } from "../core"

import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale.css"

type Props = BoxProps & {
  tariffs: CompanyTariff[]
  typeInsurance: TypeInsuranceEnum
  minHeight?: string | string[]
  selectTariff?: (
    total: number,
    companyName: string,
    variant: InsuranceVariant,
  ) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deductible?: any
  isUpdating?: boolean
  setIsUpdating?: (isUpdating: boolean) => void
}

export const TariffCards = ({
  tariffs,
  minHeight,
  typeInsurance,
  selectTariff,
  deductible,
  isUpdating,
  setIsUpdating,
  ...rest
}: Props): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.3"),
  })
  const isLoading = useShowSpinner()

  useEffect(() => {
    let timer: number
    if (!isLoading || isUpdating) {
      timer = setTimeout((): void => {
        setIsUpdating && setIsUpdating(false)
      }, 600)
    }

    return (): void => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdating])

  const location = useLocation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locationState: any = location.state || {}
  const {
    brand,
    year,
    extendedTerms,
    civilLiabilityInsurance,
    voluntaryLiabilityInsurance,
    personalInsurance,
    purpose,
    seats,
    tonnage,
    price,
  } = locationState

  return isLoading || isUpdating ? (
    <Spinner />
  ) : (
    <Box
      display="flex"
      mx={isMobile ? "26px" : "180px"}
      justifyContent="center"
      flexWrap="wrap"
      {...rest}
    >
      {tariffs.map((tariff: CompanyTariff, index: number) => {
        const { deviationRate, image, rating, name } = tariff

        const fields = getTariffFields(
          typeInsurance,
          {
            carLiability: civilLiabilityInsurance,
            voluntaryLiabilityInsurance: get(
              voluntaryLiabilityInsurance,
              "voluntaryLiabilityCoverage",
              false,
            ),
            personalInsurance: personalInsurance?.personalInsuranceCoverage,
          },
          deductible,
        )

        const total =
          typeInsurance === TypeInsuranceEnum.COMPREHENSIVE
            ? Math.floor(
                getComprehensiveCarTotal(
                  brand,
                  year,
                  deviationRate,
                  extendedTerms,
                  civilLiabilityInsurance,
                  voluntaryLiabilityInsurance,
                  personalInsurance,
                  price,
                  deductible,
                ),
              )
            : typeInsurance === TypeInsuranceEnum.LIABILITY
            ? Math.floor(
                getCarLiabilityTotal(
                  purpose.toLowerCase(),
                  seats,
                  tonnage,
                  voluntaryLiabilityInsurance,
                  personalInsurance,
                  deviationRate,
                ),
              )
            : 0

        return (
          <TariffCard
            key={index}
            imagePath={String(image)}
            rating={Number(rating)}
            fields={fields}
            total={total}
            company={name}
            typeInsurance={typeInsurance}
            minHeight={minHeight}
            selectTariff={selectTariff}
          />
        )
      })}
    </Box>
  )
}
