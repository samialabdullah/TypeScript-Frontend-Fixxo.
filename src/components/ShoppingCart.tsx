
import {ShoppingCartContextModel, useShoppingCart} from '../contexts/ShoppingCartContext'
import ShoppingCartproduct, { product } from './ShoppingCartproduct'


const ShoppingCart = () => {

    const {cartproducts} = useShoppingCart() as ShoppingCartContextModel

  return (

    <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">

        <div className="offcanvas-header">

            <h4 className="offcanvas-title" id="shoppingCartLabel"><i className='fa-regular fa-bag-shopping me-3'></i> Your Shopping Cart</h4>

            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>

        <div className="offcanvas-body">
          {
            cartproducts.map((product: product) => (<ShoppingCartproduct key={product.articleNumber} product={product}/> ))
            
          }

        </div>

    </div>

  )

}

export default ShoppingCart
