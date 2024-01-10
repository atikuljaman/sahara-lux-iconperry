import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-4">
            <div className="content">
              <h2>LOCATION</h2>
              <p>
                5601 N High St, <br /> Worthington, Ohio <br /> 43085 USA
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="content">
              <h2>HOURS</h2>
              <p>
                12 pm to 1 am <br /> monday to sunday
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="content">
              <h2>FIND US ON...</h2>
              <div className="socials">
                <a
                  href="https://www.facebook.com/profile.php?id=61553490749524"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/saharaluxrestaurantandlounge/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <br />
            <br />
            <div className="content">
              <h2>CONTACT US</h2>
              <a href="#">380-500-4001</a> <br /> <br />
              <a href="mailto:info@saharaluxllc.com">info@saharaluxllc.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
