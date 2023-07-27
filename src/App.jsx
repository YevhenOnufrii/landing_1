import './App.scss'
import {
  About,
  ContactUs,
  Container,
  Footer,
  Gallery,
  Header,
  Main,
  Testimonials,
  Wrapper,
} from './components/index.js'

export default function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Header />
          <Main />
          <About />
          <Gallery />
          <Testimonials />
          <ContactUs />
        </Container>
        <Footer />
      </Wrapper>
    </>
  )
}
