import React, { ReactElement, useState, Fragment } from "react"
import { Box } from "../../ui/box"
import { PaymentCard } from "./payment-card"
import { CardsData } from "../cards-data"
import { PaymentMethodEnum } from "../../core/enums"
import { Button } from "../../ui/buttons/button"
import { t } from "../../i18n/i18n"
import { useHistory } from "react-router-dom"
import { sorry } from "../../routes"
import { analyticsPayment } from "../../core/analytics-events"
import { fetchPayment } from "../fetch-payment"

export const PaymentCards = (): ReactElement => {
  const [selected, setSelected] = useState<PaymentMethodEnum | null>(null)

  const history = useHistory()

  const handleSelect = (method: PaymentMethodEnum): void => {
    setSelected(method)
  }

  const handlePay = async (): Promise<void> => {
    const locationState: any = history.location.state
    const packageName = locationState.packageName
      ? `${locationState.companyName}, ${locationState.packageName}`
      : locationState.companyName

    await fetchPayment({
      email: locationState.email,
      startDate: locationState.startDate,
      insuranceType: locationState.typeInsurance,
      total: locationState.total,
      province: locationState.province,
      package: packageName,
      details: { ...locationState },
    })

    analyticsPayment(
      selected,
      locationState.total,
      locationState.typeInsurance,
      locationState.companyName,
      locationState.variant,
    )

    selected &&
      history.push({
        pathname: sorry,
        state: {
          name: locationState.name,
        },
      })
  }

  return (
    <Fragment>
      <Box>
        {CardsData.map(({ title, images, method }) => (
          <PaymentCard
            key={title}
            title={title}
            images={images}
            isSelected={selected === method}
            handleSelect={(): void => handleSelect(method)}
          />
        ))}
      </Box>

      <Button
        text={t("general.pay")}
        width={["100%", "210px"]}
        py="8px"
        mt={["30px", "50px"]}
        display="flex"
        justifyContent="center"
        alignItems="end"
        ml="auto"
        onClick={handlePay}
      />
    </Fragment>
  )
}
