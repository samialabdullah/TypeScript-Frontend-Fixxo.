import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'

const NotFoundSight: React.FC = () => {
  return (
    <>
       <MainMenuPart />
         <div className="container d-flex justify-content-center align-items-center" style={{ height: "500px"}}>
         <h1>404 - Page Not Found</h1>
       </div>
       <FooterPart />
    </>
  )
}
export default NotFoundSight