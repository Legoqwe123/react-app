import { GtagFlowTypeEnum } from "../core/enums"
import { Indexer } from "../core"

interface Props {
  email: string
  insuranceType: GtagFlowTypeEnum
  total: number
  startDate: string
  province: string
  details: Indexer
  package: string
}

export const fetchPayment = async (data: Props) => {
  delete data.details.email
  delete data.details.total
  delete data.details.insuranceType
  delete data.details.province
  delete data.details.startDate

  const { email, insuranceType, total, startDate, province, details } = data

  const formData = new FormData()

  formData.append("email", email)
  formData.append("insuranceType", insuranceType)
  formData.append("total", String(total))
  formData.append("startDate", startDate)
  formData.append("province", province)
  formData.append("details", JSON.stringify(details))

  await fetch(`/purchase.php`, {
    method: "POST",
    body: formData,
  })
}
