import React from 'react'
import ProductCard, { ProductCardType } from '../components/ProductCard'
import { ProductProduct } from '../models/ProductModels'

export interface Props{

  product:ProductCardType []

}


const CategoryThreePart : React.FC <Props>= ({product = []}) => {
  return (

    <section className="flash-Three-grid">
      <div className="container">
            <div className='flash-Three-box'>
                <p className='flash-title'>2 FOR USD $29</p>
                <button type='button' className='btn-white'>FLASE SALE</button>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 flash-right-grid-boxes" >
                {
                  product.map(product => <ProductCard key={product.articleNumber} product={product} />)
                }
            </div>
      </div>
    </section>
  )
}

export default CategoryThreePart