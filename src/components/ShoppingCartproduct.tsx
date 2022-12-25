import React from 'react'
import {ShoppingCartContextModel, useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormater } from '../utilities/currencyFormatter'

export interface product {
    quantity: number
    product: any
    imageName: string | undefined
    name: string
    articleNumber: string
    price: number
    description?: string
    rating: number
}
const ShoppingCartproduct: React.FC <{product: product}> = ({product}) => {
    const {increment, decrement, removeproduct} = useShoppingCart()as ShoppingCartContextModel

    return (
        <div className='shoppingcart-product'>
            <div className='product-image'>
                <img src={product.product.imageName} alt = {product.product.name}/>
            </div>
             <div className='product-info'>
                <div className='product-info-name'>{product.product.name}</div>
                    <div className='product-info-quantity'>
                        <div className='product-info-quantity-box'>
                            <button className='box-button-left' onClick={() => increment(product)}>+</button>
                              <span>{product.quantity}</span>
                            <button className='box-button-right' onClick={() => decrement(product)}>-</button>
                        </div>
                    </div>
            </div>
            <div className='product-price'>
                <div> {currencyFormater(product.product.price * product.quantity)} </div>
                <button onClick={() => removeproduct(product.articleNumber)} ><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}

export default ShoppingCartproduct

