import { fbqMTPLResult, fbqMTPLFillInfo, fbqMTPLPay } from "./fbq"
import {
  gtagCompanyName,
  gtagFillInfoForm,
  gtagPayment,
  gtagEcomSelect,
  gtagEcomPay,
} from "./gtag"
import { TypeInsuranceEnum, GtagFlowTypeEnum, PaymentMethodEnum } from "./enums"
import { InsuranceVariant } from "."
import { getVariantString } from "./get-variant-string"

export const analyticsResult = (
  company: string,
  typeInsurance: TypeInsuranceEnum,
  variant: InsuranceVariant,
  total: number,
  coupon: boolean,
): void => {
  const flowType =
    typeInsurance === TypeInsuranceEnum.LIABILITY
      ? GtagFlowTypeEnum.MTPL
      : TypeInsuranceEnum.COMPREHENSIVE
      ? GtagFlowTypeEnum.MPD
      : GtagFlowTypeEnum.HEALTH

  gtagEcomSelect(company, flowType, getVariantString(variant), total, coupon)
  gtagCompanyName(company, typeInsurance)
  fbqMTPLResult()
}

export const analyticsFillInfo = (flowType: GtagFlowTypeEnum): void => {
  fbqMTPLFillInfo()
  gtagFillInfoForm(flowType)
}

export const analyticsPayment = (
  paymentMethod: PaymentMethodEnum | null,
  total: number,
  typeInsurance: GtagFlowTypeEnum,
  companyName: string,
  variant: InsuranceVariant,
): void => {
  fbqMTPLPay(total)
  gtagPayment(paymentMethod, total, typeInsurance)
  gtagEcomPay(companyName, typeInsurance, getVariantString(variant), total)
}
