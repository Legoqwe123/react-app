import { t } from "../i18n/i18n"
import { PaymentMethodEnum } from "../core/enums"

export const CardsData = [
  {
    method: PaymentMethodEnum.ONLINE,
    title: t("payment.online"),
    images: ["visa.png", "mastercard.png", "jcb.png"],
  },
  {
    method: PaymentMethodEnum.ATM,
    title: t("payment.atm"),
    images: [
      "atm1.png",
      "atm2.png",
      "atm3.png",
      "atm4.png",
      "atm5.png",
      "atm6.png",
      "atm7.png",
    ],
  },
  {
    method: PaymentMethodEnum.MOMO,
    title: t("payment.momo"),
    images: ["momo.png"],
  },
  {
    method: PaymentMethodEnum.SAMSUNG,
    title: t("payment.samsung"),
    images: ["samsung-pay.svg"],
  },
  {
    method: PaymentMethodEnum.APPLE,
    title: t("payment.apple"),
    images: ["apple-pay.svg"],
  },
]
