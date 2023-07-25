import { useState } from 'react'
import './App.scss'
import callIcon from './assets/Icon_Phone_call.svg'
import backgroundImage from './assets/Layer.jpg'
import logoImg from './assets/Logo_Miami.png'
import { Container, Wrapper } from './components/index.js'

function BurgerMenu() {
  const [checked, setChecked] = useState(false)
  const onCheck = event => {
    event.stopPropagation()
    setChecked(!checked)
  }
  return (
    <>
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
    </>
  )
}

function Header() {
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

function Main() {
  return (
    <section className="main">
      <div className="main__background-img">
        <img src={backgroundImage} alt="background image" />
      </div>
      <div className="main__title">
        <h1 className="main__title_text">
          Miami <br /> Condo Kings
        </h1>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Header />
          <Main />
        </Container>
      </Wrapper>
    </>
  )
}

export default App
