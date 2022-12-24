import React from 'react'
import LeftImage from '../assets/images/img-3.svg';
import RightImage from '../assets/images/img-4.svg'


const BannersPart = () => {
    return (
    
        <div className="container-fluid pamela-reif-lets-be-conscious">
            <div className="pamela-reif">
                <img className="left-img" src={LeftImage} alt="pamela reif's top picks"/>
    
            </div>
            
            <div className="lets-be-conscious">
                <img className="right-img" src={RightImage} alt="Let's be conscious"/>
    
            </div>
        </div>
    )










  
}

export default BannersPart