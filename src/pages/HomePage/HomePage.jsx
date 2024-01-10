import {
  Banner,
  Navigation,
  About,
  Gallery,
  Reservation,
  Sliders,
  Newsletter,
  Footer,
} from "../../components";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Gallery />
      <Reservation />
      {/* <Sliders /> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
