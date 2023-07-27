import './Testimonials.scss'

import imageTestimonial_1 from '../assets/testimonial_1.jpg'
import imageTestimonial_2 from '../assets/testimonial_2.jpg'
import imageTestimonial_3 from '../assets/testimonial_3.jpg'

export default function Testimonials() {
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
