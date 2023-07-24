import { useState } from 'react'
import './App.scss'
import burgerIconOpen from './assets/Icon_Burger_menu_closed.svg'
import burgerIconClosed from './assets/Icon_Burger_menu_open.svg'
import callIcon from './assets/Icon_Phone_call.svg'
import backgroundImage from './assets/Layer.jpg'
import logoImg from './assets/Logo_Miami.png'

function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>
}

function Container({ children }) {
  return <div className="container">{children}</div>
}

function Header() {
  const [phoneView, setPhoneView] = useState(false)
  const [burgerIcon, setBurgerIcon] = useState(false)

  const handleClick = event => {
    event.stopPropagation()
    setPhoneView(!phoneView)
  }

  const changeBurgerIcon = event => {
    event.stopPropagation()
    setBurgerIcon(!burgerIcon)
  }

  return (
    <section className="header">
      <div onClick={e => changeBurgerIcon(e)} className="header__burger-icon">
        <img src={burgerIcon ? burgerIconOpen : burgerIconClosed} alt="burger menu icon" />
      </div>
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
