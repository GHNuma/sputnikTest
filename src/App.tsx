import "./App.css"
import {products} from "./mock.ts"
import type {ProductCardProps} from "./components/product-card/types.ts"
import {lazy, Suspense} from "react"

const ProductCard = lazy(() => import("./components/product-card/product-card.tsx"))

function App() {
  return (
    <div className="flex justify-center mt-20 items-center w-full h-full">
      <Suspense fallback={<p className="text-center">Загрузка товаров...</p>}>
        <div className="flex gap-3 flex-col w-full items-center">
          {products.length > 0 ? (
            products.map((product: ProductCardProps) => <ProductCard key={product.title} {...product} />)
          ) : (
            <p>Нет товаров</p>
          )}
        </div>
      </Suspense>
    </div>
  )
}

export default App
