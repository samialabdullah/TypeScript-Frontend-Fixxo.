// import React from 'react'
// import { ShoppingCartContext, ShoppingCartContext } from '../contexts/ShoppingCartContext'
// import { CartItem } from '../models/ShoppingCartModels'
// import { currencyFormater } from '../utilities/currencyFormatter'

// interface ShoppingCartproductType {
//     product: CartItem
// }

// const ShoppingCartproduct: React.FC<ShoppingCartproductType> = ({product}) => {
//     const { increment, decrement, remove } =ShoppingCartContext() as ShoppingCartContextType

//     return (
//       <div className="shoppingcart-product">
//           <div className="product-image">
//             <img src={product.product.imageName} alt={product.product.name} />
//           </div>
//           <div className="product-info">
//               <div className="product-info-name">{product.product.name}</div>
//               <div className="product-info-quantity">
//                   <div className="product-info-quantity-box">
//                       <button className="box-button-left" onClick={() => decrement(product)}>-</button>
//                       <span>{product.quantity}</span>
//                       <button className="box-button-right" onClick={() => increment(product)}>+</button>
//                   </div>
//               </div>
//           </div>
//           <div className="product-price">
//               <div>{currencyFormater(product.product.price * product.quantity)}</div>
//               <button onClick={() => remove(product.articleNumber)}><i className="fa-solid fa-trash"></i></button>
//           </div>                                                                    
//       </div>
//     )
// }

// export default ShoppingCartproduct


import React from 'react'
import { ShoppingCartContext, ShoppingCartContextModel, useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormater } from '../utilities/currencyFormatter'
//  import { ShoppingCartContextModel } from './ProductCard'

export interface product {
    quantity: number
    product: any
    imageName: string | undefined
    articleNumber: string
    name: string
    price: number
    description?: string
}
const ShoppingCartproduct: React.FC <{product: product}> = ({product}) => {
    const {incrementQuantity, decrementQuantity, removeItem} = useShoppingCart()as ShoppingCartContextModel

  return (
        <div className='shoppingcart-item'>
            <div className='item-image'>
                <img src={product.product.imageName} alt = {product.product.name}/>
            </div>
            <div className='item-info'>
                <div className='item-info-name'>{product.product.name}</div>
                <div className='item-info-quantity'>
                    <div className='item-info-quantity-box'>
                        <button className='box-button-left' onClick={() => incrementQuantity(product)}>+</button>
                        <span>{product.quantity}</span>
                        <button className='box-button-right' onClick={() => decrementQuantity(product)}>-</button>
                    </div>
                </div>
            </div>
            <div className='item-price'>
                <div> {currencyFormater(product.product.price * product.quantity)} </div>
                <button onClick={() => removeItem(product.articleNumber)} ><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}

export default ShoppingCartproduct

