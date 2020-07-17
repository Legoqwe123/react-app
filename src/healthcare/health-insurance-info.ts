import get from "lodash/get"

const HealthInsuranceInfo = {
  vi: {
    "Quyền lợi Ngoại trú": `-Chi phí khám bệnh, tiền thuốc theo kê đơn của bác sỹ, chi phí xét nghiệm, chuẩn đoán hình ảnh trong việc điều trị bệnh thuộc phạm vi bảo hiểm (Giới hạn chi phí/lần khám và Không giới hạn số lần khám/năm).
    - Vật lý trị liệu, trị liệu học bức xạ, liệu pháp ánh sáng và các phương pháp điều trị tương tự khác do bác sỹ chỉ định (Giới hạn/lần khám)
    (Tối đa 60 ngày/năm).`,
    "Quyền lợi Nội trú": `-Chi phí khám bệnh, tiền thuốc theo kê đơn của bác sỹ, chi phí xét nghiệm, chuẩn đoán hình ảnh trong việc điều trị bệnh thuộc phạm vi bảo hiểm (Giới hạn chi phí/lần khám và Không giới hạn số lần khám/năm).
    - Vật lý trị liệu, trị liệu học bức xạ, liệu pháp ánh sáng và các phương pháp điều trị tương tự khác do bác sỹ chỉ định (Giới hạn/lần khám)
    (Tối đa 60 ngày/năm).`,
    "Chăm sóc răng": `- Khám và chẩn đoán
    - Chụp X-Quang
    - Viêm lợi (nướu)
    - Hàn răng bằng chất liệu thông thường (amalgan hoặc composite, ...)
    - Điều trị tủy răng
    - Nhổ răng bệnh lý (bao gồm tiểu phẫu)
    - Lấy cao răng (02 lần/năm)`,
    "Thai sản & sinh đẻ": `- Sinh thường
    - Điều trị biến chứng thai sản
    - Sinh mổ`,
    "Quyền lợi Nội trú tooltip": `- Điều trị nội trú (do ốm đau, bệnh tật, thai sản)
    - Nằm viện (số tiền bảo hiểm/người/năm)`,
  },
  en: {
    "Outpatient cover": `- General Practitioners and Specialist fees, Prescribed medicines, Laboratory test, diagnostic and treatment prescribed by a physician.
    - Physiotherapy, radiotherapy, heat therapy or phototherapy prescribed by a physician.`,
    "Inpatient cover": `Medical:
    - Hospitalization (Hospitalization due to Illness, Childbirth)
    - Pay all the actual medical expenses arising from treatment, room and meals, testing, X-ray, medicaments, blood, oxygen, serum, transfusion, hospital clothes
    - Surgical operation due to Illness/year
    - Intensive care unit (ICU)
    - Rehabilitation
    - Pre-Hospitalization treatment (30 days prior to the hospital admission)
    - Post-Hospitalization Treatment ( 30 days following the hospital discharge)
    - Home nursing immediately following hospital discharge (Max. 15 days/year)
    - Organ transplantation (not including organ acquisition or expense relating to organ donors)
    - Ambulance/SoS services within 
    - Hospital cash income (Max. 60 nights)
    - Burial cost`,
    Dental: `- Examination, X. Ray
    - Gingivitis, pyorrhoea
    - Normal compound fillings including amalgam, composite, fuji...
    - Root canal treatment
    - Teeth cleaning 
    - Extraction of diseased teeth (excluding surgery)`,
    Maternity: `- Pregnancy examination : 500,000 / years
    - Normal Delivery/Caesarean section
    - Complication of Pregnancy & Childbirth`,
    "Inpatient cover tooltip": `- Hospitalization (Hospitalization due to Illness, Childbirth)
    - Pay all the actual medical expenses arising from treatment, room and meals, testing, X-ray, medicaments, blood, oxygen, serum, transfusion, hospital clothes`,
  },
}

export const getHealthInsuranceText = (
  locale: string,
  subject: string,
): string => get(HealthInsuranceInfo, `${locale.toLowerCase()}[${subject}]`, "")
