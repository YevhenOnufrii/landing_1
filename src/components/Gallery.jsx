import './Gallery.scss'

import imageList_1 from '../assets/gallery_1.jpg'
import imageList_2 from '../assets/gallery_2.jpg'
import imageList_3 from '../assets/gallery_3.jpg'
import imageList_4 from '../assets/gallery_4.jpg'
import imageList_5 from '../assets/gallery_5.jpg'
import imageList_6 from '../assets/gallery_6.jpg'

export default function Gallery() {
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
