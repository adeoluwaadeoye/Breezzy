import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Hero";
import Rooms from "./Components/Rooms/Rooms";
import About from "./Components/About/About";
import Popular from "./Components/Popular/Popular";
import Gallery from './Components/Gallery/Gallery';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from "./Components/Contact/Contact"
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Rooms />
      <About />
      <Popular />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App;