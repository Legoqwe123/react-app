export const getPrice = (price: string): number =>
  Number(
    price
      .split(" ")[0]
      .split(",")
      .join(""),
  )

export const formatPrice = (price: number): string =>
  price.toLocaleString("en-EN")
