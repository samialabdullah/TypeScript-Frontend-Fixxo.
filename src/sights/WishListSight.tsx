import React from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'
import BreadcrumbPart from '../Parts/BreadcrumbPart'

const WishListSight = () => {
  return (
    <>
      <MainMenuPart />
      <BreadcrumbPart currentPage="Wish-List" />
        <div className="container d-flex justify-content-center align-items-center" style={ { height: "500px" } }>
          <h1>Wish-List</h1>
        </div>
      <FooterPart />
    </>
  )
}

export default WishListSight