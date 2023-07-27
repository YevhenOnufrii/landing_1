import backgroundImage from '../assets/Layer.jpg'
import './Main.scss'

export default function Main() {
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
