// import React from 'react'
// import { ShoppingCartContext, ShoppingCartContext } from '../contexts/ShoppingCartContext'
// import { CartItem } from '../models/ShoppingCartModels'
// import ShoppingCartproduct from './ShoppingCartproduct'

// const ShoppingCart: React.FC = () => {
//   const { items } = ShoppingCartContext() as ShoppingCartContextType
//   return (
//     <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
//      <div className="offcanvas-header">
//         <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping me-3"></i>Shopping Cart</h4>
//         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//      </div>
//         <div className="offcanvas-body">
//         {
//           items.map((product: CartItem) => (<ShoppingCartproduct key={product.articleNumber} product={product} />))
//         }
//         </div>
//     </div>
//   )
// }

// export default ShoppingCart



// import React from 'react'
// // import {ShoppingCartContext, useShoppingCart} from '../contexts/ShoppingCartContext'
// import { ShoppingCartContextModel } from './ProductCard'
// import ShoppingCartproduct, { product } from './ShoppingCartproduct'
// //  import ShoppingCartproduct from './ShoppingCartproduct'
// import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

// const ShoppingCart = () => {
//     const {cartItems} = ShoppingCart() as unknown as ShoppingCartContextModel
//   return (
//     <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
//         <div className="offcanvas-header">
//             <h4 className="offcanvas-title" id="shoppingCartLabel"><i className='fa-regular fa-bag-shopping me-3'></i> Your Shopping Cart</h4>
//             <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//         {
//           cartItems.map((product: product) => (<ShoppingCart key={product.articleNumber} product={product}/> ))
//         }
//         </div>
//     </div>
//   )
// }

// export default ShoppingCart


import React from 'react'

import {ShoppingCartContextModel, useShoppingCart} from '../contexts/ShoppingCartContext'

import ShoppingCartItem, { product } from './ShoppingCartproduct'



const ShoppingCart = () => {

    const {cartItems} = useShoppingCart() as ShoppingCartContextModel

  return (

    <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">

        <div className="offcanvas-header">

            <h4 className="offcanvas-title" id="shoppingCartLabel"><i className='fa-regular fa-bag-shopping me-3'></i> Your Shopping Cart</h4>

            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>

        <div className="offcanvas-body">

        {

          cartItems.map((product: product) => (<ShoppingCartItem key={product.articleNumber} product={product}/> ))

        }

        </div>

    </div>

  )

}



export default ShoppingCart
