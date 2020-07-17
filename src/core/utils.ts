export const getPhoneNumber = (phone: string | undefined): string =>
  phone ? (phone.match(/[0-9]/g) || []).join("") : ""
