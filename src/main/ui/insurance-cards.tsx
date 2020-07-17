import React, { ReactElement } from "react"
import { Box, BoxProps } from "../../ui/box"
import { InsuranceCard } from "./insurance-card"
import { t } from "../../i18n/i18n"
import { useMediaQuery } from "react-responsive"
import { theme } from "../../theme/theme"
import { healthcare, comprehensiveCar, carLiability } from "../../routes"
import { InsuranceCardProps } from "../../core"
import { insuranceCardsId } from "../../core/anchors"

const cards: InsuranceCardProps[] = [
  {
    title: t("main.carCivil"),
    subTitle: t("general.compulsory"),
    link: carLiability,
  },
  {
    title: t("main.carInsurance"),
    subTitle: t("general.comprehensive"),
    link: comprehensiveCar,
  },
  {
    title: t("main.health"),
    subTitle: t("general.comprehensive"),
    link: healthcare,
  },
]

export const InsuranceCards = ({ ...rest }: BoxProps): ReactElement => {
  const isMobile = useMediaQuery({
    maxWidth: theme("breakpoints.1"),
  })

  return (
    <Box
      id={insuranceCardsId}
      display="flex"
      flexWrap={isMobile ? "wrap" : "no-wrap"}
      justifyContent="center"
      flexDirection={isMobile ? "column" : "row"}
      alignItems="center"
      mx={[0, "36px", "36px", 0]}
      {...rest}
    >
      {cards.map(
        (card: InsuranceCardProps, index: number): ReactElement => (
          <InsuranceCard
            {...card}
            index={index}
            key={card.title}
            isMobile={isMobile}
          />
        ),
      )}
    </Box>
  )
}
