import { useState } from 'react'
import './App.scss'
import callIcon from './assets/Icon_Phone_call.svg'
import backgroundImage from './assets/Layer.jpg'
import logoImg from './assets/Logo_Miami.png'
import imageList_1 from './assets/gallery_1.jpg'
import imageList_2 from './assets/gallery_2.jpg'
import imageList_3 from './assets/gallery_3.jpg'
import imageList_4 from './assets/gallery_4.jpg'
import imageList_5 from './assets/gallery_5.jpg'
import imageList_6 from './assets/gallery_6.jpg'
import imageTestimonial_1 from './assets/testimonial_1.jpg'
import imageTestimonial_2 from './assets/testimonial_2.jpg'
import imageTestimonial_3 from './assets/testimonial_3.jpg'
import { Container, Wrapper } from './components/index.js'

function BurgerMenu() {
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

function About() {
  return (
    <div className="about">
      <div className="about__title">
        <h3 className="about__title_text title">
          Miami best <br /> Real estate <span>here</span>
        </h3>
      </div>
      <div className="about__text">
        <p className="about__text_header">Over 50 years experience in love.</p>
        <p className="about__text_main">
          Mazel and VA Tsukkerman in his &quot;Analysis of musical works&quot;. Pointillism, which
          originated in the music of the early twentieth century, microforms, found a distant
          historical. <br />
          <br />
          The market leader in real estate since 2003. Awards Real Estate Company, 2010, 2011, 2013.
          More than 200 satisfied customers premium segment. We focus only on new buildings and
          high-level doskanalno know this area better than other specialists. Working directly with
          developers - so have more useful information about the profitable deals.
        </p>
        <p className="about__text_footer">
          We will never be late! <br /> Guaranteed secure transaction - 100%.
        </p>
      </div>
    </div>
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

function Gallery() {
  const handleClick = event => {
    event.stopPropagation()
    event.preventDefault()
  }
  return (
    <section className="gallery">
      <div className="gallery__title title">
        <p className="gallery__title_text">Gallery</p>
        <div className="gallery__title_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.99996 3.69323L0.356822 9.67325L0 9.68506L3.06273 0L5.13652 0.287248L3.33903 5.68302L9.8777 1.80528H9.99996H10.1222L12.1553 3.01098L11.4422 4.55322L9.99996 3.69323ZM10.0647 13.0001L9.84945 12.9998L6.5883 6.34875L8.33968 5.30691L9.98037 8.78875L11.9235 4.84341L11.9222 4.84253L12.6544 3.30707L16.661 5.68302L14.8635 0.287248L16.9374 0L20 9.68506L19.6433 9.67325L13.6381 5.91595L10.0647 13.0001Z"
              fill="#0075FF"
            />
          </svg>
        </div>
      </div>
      <div className="gallery-list">
        <a href="#" className="image-box">
          <div className="image-box__first-image">
            <img src={imageList_1} alt="image" />
          </div>
          <div className="image-box__second-image">
            <img src={imageList_2} alt="image" />
          </div>
          <h3 className="image-box__title">
            <span>Marina Palms</span> / North Miami Beach, FL 33162
          </h3>
        </a>
        <a href="#" className="image-box">
          <div className="image-box__first-image">
            <img src={imageList_3} alt="image" />
          </div>
          <div className="image-box__second-image">
            <img src={imageList_4} alt="image" />
          </div>
          <h3 className="image-box__title">
            <span>Edition Residens</span> /Miami Beach, FL 33139
          </h3>
        </a>
        <a href="#" className="image-box">
          <div className="image-box__first-image">
            <img src={imageList_5} alt="image" />
          </div>
          <div className="image-box__second-image">
            <img src={imageList_6} alt="image" />
          </div>
          <h3 className="image-box__title">
            <span>Faena House</span> / Miami Beach, FL 33140
          </h3>
        </a>
      </div>
      <a onClick={e => handleClick(e)} href="" className="gallery__view-all-btn">
        View all
      </a>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__title title">
        <p className="testimonials__title_text">Testimonials</p>
        <div className="testimonials__title_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.99996 3.69323L0.356822 9.67325L0 9.68506L3.06273 0L5.13652 0.287248L3.33903 5.68302L9.8777 1.80528H9.99996H10.1222L12.1553 3.01098L11.4422 4.55322L9.99996 3.69323ZM10.0647 13.0001L9.84945 12.9998L6.5883 6.34875L8.33968 5.30691L9.98037 8.78875L11.9235 4.84341L11.9222 4.84253L12.6544 3.30707L16.661 5.68302L14.8635 0.287248L16.9374 0L20 9.68506L19.6433 9.67325L13.6381 5.91595L10.0647 13.0001Z"
              fill="#0075FF"
            />
          </svg>
        </div>
      </div>
      <div className="testimonials__list testimonial">
        <div className="testimonial__box">
          <div className="testimonial__box_image">
            <img src={imageTestimonial_1} alt="" />
          </div>
          <div className="testimonial__box_user-info user-info">
            <h4 className="user-info_name">Leslie Mckinney</h4>
            <p className="user-info_position">ceo</p>
            <p className="user-info_comment">
              Nice work, Certificates National Association of Realtors (USA)
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box_image">
            <img src={imageTestimonial_2} alt="" />
          </div>
          <div className="testimonial__box_user-info user-info">
            <h4 className="user-info_name">Scarlett Hawkins</h4>
            <p className="user-info_position">Senior Vice President</p>
            <p className="user-info_comment">
              My soul is illuminated by an unearthly joy, as these beautiful spring morning, which I
              enjoy with all my heart.
            </p>
          </div>
        </div>
        <div className="testimonial__box">
          <div className="testimonial__box_image">
            <img src={imageTestimonial_3} alt="" />
          </div>
          <div className="testimonial__box_user-info user-info">
            <h4 className="user-info_name">Max Henry</h4>
            <p className="user-info_position">Chief Design Officer</p>
            <p className="user-info_comment">
              When my lovely valley of steam rises and half-day sun is above an impermeable
            </p>
          </div>
        </div>
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
          <About />
          <Gallery />
          <Testimonials />
        </Container>
      </Wrapper>
    </>
  )
}

export default App
