import { InsuranceVariant } from "."

export const getVariantString = ({ CL, PA, VL }: InsuranceVariant): string =>
  [CL ? "CL" : "", PA ? "PA" : "", VL ? "VL" : ""]
    .filter((item: string): string => item)
    .join(", ")
