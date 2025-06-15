import React from "react"
import type {ProductCardProps} from "./types.ts"

const getLocaleForCurrency = (currency: ProductCardProps["currency"]) => {
  switch (currency) {
    case "RUB":
      return "ru-RU"
    case "USD":
      return "en-US"
    case "EUR":
      return "de-DE"
    default:
      return "en-US"
  }
}

const ProductCard: React.FC<ProductCardProps> = ({title, origin, price, currency, imageUrl}) => {
  const formattedPrice = new Intl.NumberFormat(getLocaleForCurrency(currency), {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2
  }).format(price / 100)

  return (
    <div className="flex flex-col max-w-[200px] md:flex-row md:min-w-[400px] w-fit border rounded-lg h-auto md:h-44">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-l-lg" />
      <div className="p-4 flex flex-col justify-center bg-gray-300 rounded-r-lg">
        <h2 className="text-lg font-semibold mb-2 text-nowrap">{title}</h2>
        <p className="text-sm text-gray-600 mb-1">Страна: {origin}</p>
        <p className="text-base font-medium">{formattedPrice}</p>
      </div>
    </div>
  )
}

export default ProductCard
