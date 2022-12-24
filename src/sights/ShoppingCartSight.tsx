import React from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'

const ShoppingCartSight = () => {
  return (
    <>
      <MainMenuPart />
      <div className="container d-flex justify-content-center align-items-center" style={ { height: "500px" } }>
          <h1>Shopping-cart</h1>
        </div>
      <FooterPart />
    </>
  )
}

export default ShoppingCartSight