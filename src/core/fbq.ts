import { getDollarsFromVND } from "./get-dollars-from-vnd"
import { USD } from "./constants"

export const fbqMTPLResult = (): void => window.fbq("track", "ViewContent")

export const fbqMTPLFillInfo = (): void =>
  window.fbq("track", "InitiateCheckout")

export const fbqMTPLPay = (total: number): void =>
  window.fbq("track", "Purchase", {
    value: getDollarsFromVND(total),
    currency: USD,
  })
