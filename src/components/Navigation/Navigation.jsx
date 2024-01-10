import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navigation_wrapper">
      <div className="top_navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="img-fluid" />
        </Link>

        <button className="menu_nav_btn" onClick={() => setOpenMenu(!openMenu)}>
          <IoIosMenu />
        </button>
      </div>

      <nav className={`${openMenu && "active"} container`}>
        <button
          className="close_nav_btn"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <IoMdClose />
        </button>

        <ul>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/specials">Specials</Link>
          </li>
          <li>
            <a href="#">Catering</a>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <a href="#">Parties</a>
          </li>
          <li>
            <Link to="/gift-cards">Gift Cards</Link>
          </li>
          <li>
            <a href="#">Job</a>
          </li>
          <li>
            <a href="#">Offer</a>
          </li>
          <li>
            <a href="#">Reserve</a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61553490749524"
              target="_blank"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/saharaluxrestaurantandlounge/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
