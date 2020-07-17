import { GtagFlowTypeEnum } from "./enums"

export const gtagGenerateId = (
  flow: GtagFlowTypeEnum,
  companyName: string,
  variant: string,
  total: number,
): string =>
  `${flow}${companyName}${variant}${total}`.replace(/[\s,]/g, "").trim()
