
import ExternalLinkIcon from '../components/ExternalLinkIcon'

const FooterPart = () => {
  return (
    <footer>
        <div className="socialmedia">
            <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-facebook-f" />
            <ExternalLinkIcon link="https://instagram.com" icon="fa-brands fa-instagram" />
            <ExternalLinkIcon link="https://twitter.com" icon="fa-brands fa-twitter" />
            <ExternalLinkIcon link="https://google.com" icon="fa-brands fa-google" />
            <ExternalLinkIcon link="https://linkedin.com" icon="fa-brands fa-linkedin" />
        </div>
        <div>&copy; Copy 2022 Fixxo. All Rights Reserved.</div>
    </footer>
  )
}

export default FooterPart
