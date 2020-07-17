export interface RestProps {
  [prop: string]:
    | object
    | boolean
    | null
    | string
    | number
    | undefined
    | symbol
    | void
}

export interface Indexer {
  [key: string]: unknown
}

export interface TermsMap {
  [key: string]: number
}

export interface SelectItem {
  id: string
  name: string
  value?: string
}

export interface SVGIconProps {
  box?: BoxProps
  props?: SVGProps<SVGSVGElement>
}

export interface TestimonialsProps {
  message: string
  name: string
  place: string
}

export interface Menu {
  name: string
  route: string
}

export interface InsuranceCardProps {
  title: string
  subTitle: string
  link: string
}

export interface CarLiabilityInsurance {
  purpose: string
  seats: string
  tonnage: string
}

export interface CompanyTariff {
  name: string
  rating: number
  deviationRate: number
  image: string
}

export interface HealthTariff {
  company: string
  rating: number
  nameEN: string
  nameVI: string
  benefitsEN: {
    [key: string]: number
  }
  benefitsVI: {
    [key: string]: number
  }
  image: string
  price: number
  years: string
}

export interface CarLiabilityInsuranceProperties {
  insuranceSum: string
  purpose: string
  seats?: number
  tonnage?: string
  deviationRate: number
}

export interface InsuranceVariant {
  PA?: boolean
  CL?: boolean
  VL?: boolean
}
