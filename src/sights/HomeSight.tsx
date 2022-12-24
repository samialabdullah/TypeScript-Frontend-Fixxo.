import React, { useContext } from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'
import ShowCasePart from '../Parts/ShowCasePart'
import ProductGridPart from '../Parts/ProductGridPart'
import BannersPart from '../Parts/BannersPart'
import CategoryThreePart from '../Parts/CategoryThreePart'
import CategoryFourPart from '../Parts/CategoryFourPart'
import CompanyServicePart from '../Parts/CompanyServicePart'
import CustomerService from "../assets/images/customer-service.svg";
import CustomerSecurePayment from "../assets/images/secured-payment.svg";
import CustomerDelivery from "../assets/images/delivery-truck.svg";
import { FeaturedProductsContext, ThreeContext, FourContext } from '../contexts/ProductContexts'
import { ProductCardType } from '../components/ProductCard'


export interface Props{

  product:ProductCardType []

}
const HomeSight: React.FC = () => {
  document.title = 'Fixxo.'
  const products = useContext(FeaturedProductsContext)
  const ThreeProducts = useContext(ThreeContext) 
  const FourProducts = useContext(FourContext)
  
  return (
    <>
      
      <MainMenuPart />
      <ShowCasePart />
      <ProductGridPart  title="Featured Products" product={products}/>
      <BannersPart />
      <CategoryThreePart  product={ThreeProducts}/>
      <CategoryFourPart   product={FourProducts}/> 
      <div className='service-contacts container' >
        <CompanyServicePart companyicon={CustomerService} servicetitle={"Customer Support"} serviceinfo={"Customer support tickets via email, phone. All in one place."}/>
        <CompanyServicePart companyicon={CustomerSecurePayment} servicetitle={"Customer Payment"} serviceinfo={"We have safe system for purchases with us."}/>
        <CompanyServicePart companyicon={CustomerDelivery} servicetitle={"CustomerDelivery"} serviceinfo={"We deliver orders for free within less than a day."}/>
        <CompanyServicePart companyicon={CustomerDelivery} servicetitle={"CustomerDelivery"} serviceinfo={"You can return within a week."}/>
      </div>
      <FooterPart />
    </>
  )
}

export default HomeSight