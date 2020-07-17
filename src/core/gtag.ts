/* eslint-disable */
import { GA_MEASUREMENT_ID } from "./constants"
import {
  Langs,
  PaymentMethodEnum,
  GtagFlowTypeEnum,
  TypeInsuranceEnum,
} from "./enums"
import { getAge } from "./get-age"
import { formatDate } from "./format-date"
import { getDollarsFromVND } from "./get-dollars-from-vnd"
import { gtagGenerateId } from "./gtag-generate-id"
import { v4 as uuid } from "uuid"

export const gtagPageView = (): void =>
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_location: window.location.hash.replace("#", ""),
    page_path: window.location.hash.replace("#", ""),
  })

export const gtagChooseInsurance = (): void =>
  window.gtag("event", "Click", {
    event_category: "main",
  })

export const gtagSendFeedback = (pageName: string): void =>
  window.gtag("event", "Feedback Sent", {
    event_category: "common",
    event_label: pageName,
  })

export const gtagChangeLang = (newLang: Langs): void =>
  window.gtag("event", "Change Language", {
    event_category: "common",
    event_label: newLang,
  })

export const gtagCompanyName = (
  company: string,
  typeInsurance: TypeInsuranceEnum,
): void => {
  const event_category =
    typeInsurance === TypeInsuranceEnum.LIABILITY
      ? GtagFlowTypeEnum.MTPL
      : typeInsurance === TypeInsuranceEnum.COMPREHENSIVE
      ? GtagFlowTypeEnum.MPD
      : GtagFlowTypeEnum.HEALTH

  window.gtag("event", "Checkout", {
    event_category,
    event_label: company,
  })
}

export const gtagPayment = (
  paymentMethod: PaymentMethodEnum | null,
  total: number,
  typeInsurance: GtagFlowTypeEnum,
): void =>
  window.gtag("event", "Buy", {
    event_category: typeInsurance,
    event_label: paymentMethod,
    value: total,
  })

export const gtagFillInfoForm = (flow: GtagFlowTypeEnum): void =>
  window.gtag("event", "Fill information", {
    event_category: flow,
  })

export const gtagMTPLHeader = (purpose: string): void =>
  window.gtag("event", "Step 1", {
    event_category: GtagFlowTypeEnum.MTPL,
    event_label: purpose,
  })

export const gtagMTPLResult = (personal: boolean, voluntary: boolean): void => {
  const event_label =
    personal && voluntary
      ? "PA, VL"
      : `${personal ? "PA" : ""}${voluntary ? "VL" : ""}`

  window.gtag("event", "Result", {
    event_category: GtagFlowTypeEnum.MTPL,
    event_label,
  })
}

export const gtagMPDCarBrand = (carBrand: string): void =>
  window.gtag("event", "Step 1", {
    event_category: GtagFlowTypeEnum.MPD,
    event_label: carBrand,
  })

export const gtagMPDStep2 = (): void =>
  window.gtag("event", "Step 2", {
    event_category: GtagFlowTypeEnum.MPD,
  })

export const gtagMPDExtendedTerms = (extendedTerms: string[]): void =>
  window.gtag("event", "Step 3", {
    event_category: GtagFlowTypeEnum.MPD,
    event_label: extendedTerms.join(", "),
  })

export const gtagMPDAdditionalInsurance = (): void =>
  window.gtag("event", "Step 4", {
    event_category: GtagFlowTypeEnum.MPD,
  })

export const gtagMPDPersonalInsurance = (
  carLiability: boolean,
  personalInsurance: boolean,
  voluntary: boolean,
): void => {
  const event_label = [
    carLiability ? "CL" : "",
    personalInsurance ? "PA" : "",
    voluntary ? "VL" : "",
  ]
    .filter((item: string) => item)
    .join(", ")

  window.gtag("event", "Result", {
    event_category: GtagFlowTypeEnum.MPD,
    event_label,
  })
}

export const gtagHealthHeader = (date: string): void =>
  window.gtag("event", "Result", {
    event_category: GtagFlowTypeEnum.HEALTH,
    event_label: getAge(formatDate(date)),
  })

export const gtagEcomSelect = (
  companyName: string,
  flow: GtagFlowTypeEnum,
  variant: string,
  total: number,
  coupon: boolean,
): void =>
  window.gtag("event", "begin_checkout", {
    items: [
      {
        id: gtagGenerateId(flow, companyName, variant, total),
        name: companyName,
        brand: companyName,
        category: flow,
        variant,
        price: getDollarsFromVND(total),
      },
    ],
    coupon,
  })

export const gtagEcomPay = (
  companyName: string,
  flow: GtagFlowTypeEnum,
  variant: string,
  total: number,
): void =>
  window.gtag("event", "purchase", {
    transaction_id: uuid(),
    value: getDollarsFromVND(total),
    items: [
      {
        id: gtagGenerateId(flow, companyName, variant, total),
        name: companyName,
        brand: companyName,
        category: flow,
        variant: variant,
        price: getDollarsFromVND(total),
      },
    ],
  })

export const gtagEdit = (flow: GtagFlowTypeEnum): void =>
  window.gtag("event", "Edit", {
    event_category: flow,
    event_label: "",
  })

export const gtagNewSearch = (flow: GtagFlowTypeEnum): void =>
  window.gtag("event", "New Search", {
    event_category: flow,
    event_label: "",
  })

export const gtagFullDetails = (flow: GtagFlowTypeEnum): void => 
  window.gtag("event", "Full Details", {
    event_category: flow,
    event_label: "",
  })