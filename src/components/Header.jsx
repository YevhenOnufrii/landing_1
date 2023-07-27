import { useState } from 'react'
import callIcon from '../assets/Icon_Phone_call.svg'
import logoImg from '../assets/Logo_Miami.png'
import BurgerMenu from './BurgerMenu'
import './Header.scss'

export default function Header() {
  const [phoneView, setPhoneView] = useState(false)

  const handleClick = event => {
    event.stopPropagation()
    setPhoneView(!phoneView)
  }

  return (
    <section className="header">
      <BurgerMenu />

      <div className="header__logo">
        <img src={logoImg} alt="logo image" />
      </div>
      <div onClick={e => handleClick(e)} className="header__phone-icon">
        <a
          href="tel:+12345555555"
          className={phoneView ? 'phone-number phone-active' : 'phone-number'}
        >
          +1 234 555-55-55
        </a>
        <img src={callIcon} alt="phone icon" />
      </div>
    </section>
  )
}
