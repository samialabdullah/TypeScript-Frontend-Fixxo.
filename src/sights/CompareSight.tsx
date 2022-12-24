import React from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'
import BreadcrumbPart from '../Parts/BreadcrumbPart'

const CompareSight = () => {
  return (
    <>
      <MainMenuPart />
      <BreadcrumbPart currentPage="Compare" />
        <div className="container d-flex justify-content-center align-items-center" style={ { height: "500px" } }>
          <h1>Compare</h1>
        </div>
      <FooterPart />
    </>
  )
}

export default CompareSight