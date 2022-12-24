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

