import './ContactUs.scss'

export default function ContactUs() {
  return (
    <section className="contact-us">
      <div className="contact-us__title title">
        <p className="testimonials__title_text">Contact us</p>
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
      <div className="contact-us__info info">
        <div className="info__contacts">
          <div className="info__phone-email">
            <p className="info__phone">
              Phone <span>+1 234 5555-55-55</span>
            </p>
            <p className="info__email">
              Email <span>hello@miami.com</span>
            </p>
          </div>
          <div className="info__address">
            <p className="info__address_text">
              Address
              <span>
                400 first ave. n. <br />
                suite 700 <br />
                Minneapolis, MN <br />
                55401
              </span>
            </p>
          </div>
        </div>
        <div className="info__contact-form ">
          <form className="contact-form" action="">
            <input className="contact-form__name" type="text" placeholder="Name" required />
            <input className="contact-form__email" type="text" placeholder="Email" required />
            <textarea name="" id="" placeholder="Message"></textarea>
            <button type="submit" className="contact-form__submit-btn">
              Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
