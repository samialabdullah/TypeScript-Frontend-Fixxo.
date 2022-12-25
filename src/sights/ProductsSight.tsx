import { useContext } from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'
import ProductGridPart from '../Parts/ProductGridPart'
import BreadcrumbPart from '../Parts/BreadcrumbPart'
import { ProductContext } from '../contexts/ProductContexts'

const ProductsSight: React.FC = () => {
  const products = useContext(ProductContext) 
  return (
    <>
      <MainMenuPart />
      <BreadcrumbPart currentPage="Products" />
      <ProductGridPart title="Products" product={products}/>
      <FooterPart />
    </>
  )
}
export default ProductsSight