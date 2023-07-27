import './Footer.scss'

import logoImg from '../assets/Logo_Miami.png'
import footer_bgImage from '../assets/footer_bgc.jpg'

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__image">
        <img src={footer_bgImage} alt="footer background image" />
      </div>
      <div className="footer__logo">
        <img src={logoImg} alt="logo" />
      </div>
    </section>
  )
}
