import ShoppingCart from "../components/ShoppingCart";
import { ProductProduct } from "../models/ProductModels";
import { createContext, useContext, useState } from "react";

 export interface ShoppingCartContextModel {
    articleNumber?: string
    quantity?: number | null
    cartproducts?: any
    totalQuantity: number
    getproductQuantity: any
    increment: any
    decrement: any
    removeproduct: any
}
  interface IShoppingCartProps {
    children: any
}

export const ShoppingCartContext = createContext<ShoppingCartContextModel | null>(null)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children} : IShoppingCartProps ) => {
    const [cartproducts, setCartproducts ] = useState <any[]>([])
        const totalQuantity = cartproducts.reduce(
            
            (quantity: number, product: { quantity: number; }) => product.quantity + quantity, 0

        )

    const getproductQuantity = (articleNumber: string) => {
        return cartproducts.find((product: { articleNumber: string; }) => product.articleNumber  === articleNumber)?.quantity || 0
    }

    const increment = (cartproducts: { articleNumber: string; product: ProductProduct; }) => {
        const {articleNumber, product} = cartproducts

        setCartproducts((products: any[]) => {

            if (products.find((product: { articleNumber: string; }) => product.articleNumber === articleNumber) == null) {

                return [...products,{articleNumber, product, quantity: 1 }]

            }else {

                return products.map((product: { articleNumber: string; quantity: number; }) => {

                    if ( product.articleNumber === articleNumber) {

                        return {...product, quantity: product.quantity + 1}

                    }else {

                        return product
                    }
                })
            }
        })
    }

    const decrement = (cartproducts: { articleNumber: string; }) => {

        const {articleNumber} = cartproducts

        setCartproducts((products: any[]) => {

            if (products.find((product: { articleNumber: string; }) => product.articleNumber === articleNumber).quantity === 1) {

                return products.filter((product: { articleNumber: string; }) => product.articleNumber !== articleNumber)

            }else {

                return products.map((product: { articleNumber: string; quantity: number; }) => {

                    if ( product.articleNumber === articleNumber) {

                        return {...product, quantity: product.quantity - 1}

                    }else {
                        return product
                    }
                })
            }
        })
    }

    const removeproduct = (articleNumber: string) => {
        setCartproducts((product: any[]) => {
            return product.filter((product: { articleNumber:string; }) => product.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartproducts, totalQuantity, getproductQuantity, increment, decrement, removeproduct}}>
        {children}
        <ShoppingCart/>
    </ShoppingCartContext.Provider>
}