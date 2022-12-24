import React from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'
import BreadcrumbPart from '../Parts/BreadcrumbPart'

const CategoriesSight = () => {
  return (
    <>
      <MainMenuPart />
      <BreadcrumbPart currentPage="Categories" />
      <div className="container d-flex justify-content-center align-items-center" style={ { height: "500px" } }>
          <h1>Categories</h1>
        </div>
      <FooterPart />
    </>
  )
}

export default CategoriesSight