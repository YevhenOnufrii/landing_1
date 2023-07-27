import { useState } from 'react'
import './BurgerMenu.scss'

export default function BurgerMenu() {
  const [checked, setChecked] = useState(false)
  const onCheck = event => {
    event.stopPropagation()
    setChecked(!checked)
  }

  checked ? (onscroll = () => scroll(0, 0)) : (onscroll = () => scroll())

  return (
    <>
      <div className="burger-box">
        <div onClick={e => onCheck(e)} className={checked ? 'burger burger-checked' : 'burger '}>
          <div></div>
        </div>
        <div className={checked ? 'burger-menu burger-active' : 'burger-menu'}>
          <nav className="menu">
            <ul className="menu__list">
              <li>
                <a href="" className="menu__link">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="menu__link">
                  About US
                </a>
              </li>
              <li>
                <a href="" className="menu__link">
                  {' '}
                  Gallery
                </a>
              </li>
              <li>
                <a href="" className="menu__link">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="" className="menu__link">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="menu__phone">
              <a href="tel:+12345555555" className="menu__phone_number">
                +1 234 555-55-55
              </a>
              <p className="menu__phone_text">call to order</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
