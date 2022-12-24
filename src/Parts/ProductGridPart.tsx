import React from 'react'
import { Interface } from 'readline'
import ProductCard, { ProductCardType } from '../components/ProductCard'
import { ProductProduct } from '../models/ProductModels'



interface ProductGridPartType {
  product: ProductCardType []
  title: string
}


const ProductGridPart: React.FC<ProductGridPartType> = ({title, product = []}) => {

  return (
    <section className="product-grid">
      <div className="container">
        <h1>{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {
                  product.map(product => <ProductCard key={product.articleNumber} product={product} />)
                }
        </div>
      </div>
    </section>
  )
}

export default ProductGridPart