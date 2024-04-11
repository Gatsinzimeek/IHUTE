import Header from "../../Component/header-section/Header";
import About from "../../Component/About-section/About";
import { Fragment } from "react";
import Testimonial from "../../Component/Testimonial-section/Testimonial";
import Footer from "../../Component/Footer/Footer";
import FAQ from "../../Component/FAQ/FAQ";
const Home = () => {
  return (
    <Fragment>
      <Header></Header>
      <main>
          <About></About>
          <Testimonial></Testimonial>
          <FAQ />
      </main>
      <Footer></Footer>
    </Fragment>
  )
}

export default Home;
