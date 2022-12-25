import { useParams } from 'react-router-dom'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'

const ProductDetailsSight: React.FC = () => {
    const params = useParams()

    return (
        <>
            <MainMenuPart />
            <div className="container mt-5">
                <h1>{params.name}</h1>
            </div>
            <FooterPart />
        </>
    )
}
export default ProductDetailsSight