import React from 'react'
import { NavLink } from 'react-router-dom'
import RightImage from '../assets/images/showcase-img-2.png'
import LeftImage from '../assets/images/showcase-img-1.png'

const ShowCasePart: React.FC = () => {
  return (
    
    <section className="showcase">
      <div className="container-fluid">
        <img className="left-img" src={LeftImage} alt="showcaseimg"/>
        <div className="showcase-body"> 
            <h2>SALE UP<br/>To 40% off</h2>
            <p>online shopping free home delivery over $200</p>
            <NavLink className="btn-theme" to={''}>
              <span className="corner-left"></span>
              <span className="corner-right"></span>
              SHOP NOW
            </NavLink>
        </div>
        <img className="right-img" src={RightImage} alt="showcaseimg"/>
      </div>
    </section>

    





  )
}

export default ShowCasePart