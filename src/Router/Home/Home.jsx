import Header from "../../Component/header-section/Header";
import About from "../../Component/About-section/About";
import { Fragment } from "react";
import Testimonial from "../../Component/Testimonial-section/Testimonial";
import Footer from "../../Component/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header></Header>
      <main>
          <About></About>
          <Testimonial></Testimonial>
      </main>
      <Footer></Footer>
    </Fragment>
  )
}

export default Home;
