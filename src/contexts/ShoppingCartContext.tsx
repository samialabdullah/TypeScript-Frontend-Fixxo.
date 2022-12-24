
// import { ProductProduct } from "../models/ProductModels";
// import { createContext, useContext, useState } from "react";
// import ShoppingCart from "../components/ShoppingCart";
// import { NamedTupleMember } from "typescript";
// import { CartItem } from "../models/ShoppingCartModels";

// export interface ShoppingCartContextModel {

//     articleNumber?: string

//     quantity?: number | null

//     cartItems?: any

//     cartQuantity: number

//     getItemQuantity: any

//     incrementQuantity: any

//     decrementQuantity: any

//     removeItem: any

// }



// interface ShoppingCartProviderType {
//     children: any
// }



// // const ShoppingCartContext = createContext<ShoppingCartContextModel | null>(null)


// export interface ShoppingCartContextType {
//     items: CartItem[]
//     totalQuantity: number
//     increment: (cartItem: CartItem) => void 
//     decrement: (cartItem: CartItem) => void
//     remove: (articleNumber: string) => void

// }



// export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null)

// export interface ShoppingCartContextType { 
//     product: ProductProduct
//     allcartproduct: ProductProduct[]
//     get: (articleNumber: string) => void
//     getAll: (take?: number) => void 
// }
// //export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null) 

// export const useShoppingCart = () => {
//     return useContext(ShoppingCartContext)
// }

// const ShoppingCartProvider: React.FC<ShoppingCartProviderType> = ({children}) => {
//     //const EMPTY_PRODUCT: ProductProduct = { articleNumber: '', name: '', category: '', price: 0, imageName: '' }

//     //const [cartproduct, setCartproduct] = useState<ProductProduct>(EMPTY_PRODUCT)


//     const [allcartproduct, setallCartproduct] = useState<ProductProduct[]>([])
//     const [featured, setFeatured] = useState<ProductProduct[]>([])

//     const cartQuantity = items.reduce(
//         (quantity: any, product: { quantity: any; }) => product.quantity + quantity, 0
//     )

//     const getproductQuantity = (articleNumber: any) => {
//         return allcartproduct.find((product: { articleNumber: any; }) => product.articleNumber === articleNumber)?.quantity || 0 
//     }

//     const increment = (cartItem: CartItem) => {
//         const {articleNumber, product} = cartItem 

//         setProducts(items => {
//             if (items.find((item: { articleNumber: string; }) => item.articleNumber  === articleNumber)  == null) {
//                 return [...items, { articleNumber, product, quantity: 1 }]
//             } else {
//                 return items.map((item: { articleNumber: string; quantity: number; }) => {
//                     if (item.articleNumber === articleNumber) {
//                         return { ...item, quantity: item.quantity + 1 }
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }
//     const decrement = (cartItem: CartItem) => {
//         const {articleNumber} = cartItem

//         setProducts(items => {
//             if (items.find((item: { articleNumber: string; }) => item.articleNumber  === articleNumber)?.quantity  === 1) {
//                 return items.filter((item: { articleNumber: string; }) => item.articleNumber !== articleNumber) 
//             } else {
//                 return items.map((item: { articleNumber: string; quantity: number; }) => {
//                     if (item.articleNumber === articleNumber) {
//                         return { ...item, quantity: item.quantity - 1 }
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }

//     const remove = (articleNumber: string) => {
//         setProducts(product => {
//             return product.filter((product: { articleNumber: string; }) => product.articleNumber !== articleNumber)
//         })
//     }
//                                                 //allcartproduct                 featured
//     return <ShoppingCartContext.Provider value={{product, cartQuantity, getproductQuantity, increment, decrement, remove}}>
//         {children}
//         <ShoppingCart />
//     </ShoppingCartContext.Provider>
// }

// export default ShoppingCartProvider

// function setProducts(arg0: (items: any) => any) {
//     throw new Error("Function not implemented.");
// }


import ShoppingCart from "../components/ShoppingCart";

import { ProductProduct } from "../models/ProductModels";
import { createContext, useContext, useState } from "react";



 export interface ShoppingCartContextModel {

   

    articleNumber?: string

    quantity?: number | null

    cartItems?: any

    cartQuantity: number

    getItemQuantity: any

    incrementQuantity: any

    decrementQuantity: any

    removeItem: any

   

}

  interface IShoppingCartProps {

    children: any

     

}



export const ShoppingCartContext = createContext<ShoppingCartContextModel | null>(null)




export const useShoppingCart = () => {

    return useContext(ShoppingCartContext)

}



export const ShoppingCartProvider = ({children} : IShoppingCartProps ) => {

    const [cartItems, setCartItems ] = useState <any[]>([])



    const cartQuantity = cartItems.reduce(

        (quantity: number, product: { quantity: number; }) => product.quantity + quantity, 0

    )



    const getItemQuantity = (articleNumber: string) => {

        return cartItems.find((product: { articleNumber: string; }) => product.articleNumber  === articleNumber)?.quantity || 0

    }



    const incrementQuantity = (cartItems: { articleNumber: string; product: ProductProduct; }) => {

        const {articleNumber, product} = cartItems



        setCartItems((items: any[]) => {

            if (items.find((item: { articleNumber: string; }) => item.articleNumber === articleNumber) == null) {

                return [...items,{articleNumber, product, quantity: 1 }]



            }else {

                return items.map((item: { articleNumber: string; quantity: number; }) => {

                    if ( item.articleNumber === articleNumber) {

                        return {...item, quantity: item.quantity + 1}

                    }else {

                        return item

                    }

                })

            }

        })

    }



    const decrementQuantity = (cartItems: { articleNumber: string; }) => {

        const {articleNumber} = cartItems



        setCartItems((items: any[]) => {

            if (items.find((item: { articleNumber: string; }) => item.articleNumber === articleNumber).quantity === 1) {

                return items.filter((item: { articleNumber: string; }) => item.articleNumber !== articleNumber)



            }else {

                return items.map((item: { articleNumber: string; quantity: number; }) => {

                    if ( item.articleNumber === articleNumber) {

                        return {...item, quantity: item.quantity - 1}

                    }else {

                        return item

                    }

                })

            }

        })

    }

    const removeItem = (articleNumber: string) => {

        setCartItems((product: any[]) => {

            return product.filter((product: { articleNumber:string; }) => product.articleNumber !== articleNumber)

        })

    }



    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>

        {children}

        <ShoppingCart/>



    </ShoppingCartContext.Provider>

}