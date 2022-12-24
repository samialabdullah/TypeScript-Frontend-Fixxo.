import React from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'
import BreadcrumbPart from '../Parts/BreadcrumbPart'

const SearchSight: React.FC = () => {
  return (
    <>
      <MainMenuPart />
      <BreadcrumbPart currentPage="Search" />
        <div className="container d-flex justify-content-center align-items-center" style={ { height: "500px" } }>
          <h1>Search</h1>
        </div>
      <FooterPart />
    </>
  )
}

export default SearchSight