import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'
import BreadcrumbPart from '../Parts/BreadcrumbPart'
import MapPart from '../Parts/MapPart'
import ContactFormPart from '../Parts/ContactFormPart'

const ContactsSight: React.FC = () => {
  document.title = 'Contacts | Fixxo.'
  return (
    <>
      <MainMenuPart />
      <BreadcrumbPart currentPage="Contacts" />
      <MapPart />
      <ContactFormPart />
      <FooterPart />
    </>
  )
}
export default ContactsSight