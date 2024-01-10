import { Navigation } from "../../components";
import "./DrinksPage.css";

const DrinksPage = () => {
  return (
    <div>
      <Navigation />

      <div className="drinks_overlay"></div>

      <div className="drinks_wrapper container">
        <div className="header">
          <h2>OUR Drinks</h2>
          <button>Beverages</button>
        </div>

        <div className="box">
          <h3>Menu</h3>

          <div className="menu">
            <div className="item">
              <div className="top">
                <h5>Mt. Dew</h5>
                <p className="price">$2.99</p>
              </div>
            </div>
            <div className="item">
              <div className="top">
                <h5>Pepsi</h5>
                <p className="price">$2.99</p>
              </div>
            </div>
            <div className="item">
              <div className="top">
                <h5>Diet Pepsi</h5>
                <p className="price">$2.99</p>
              </div>
            </div>
            <div className="item">
              <div className="top">
                <h5>Lemonade</h5>
                <p className="price">$2.99</p>
              </div>
            </div>
            <div className="item">
              <div className="top">
                <h5>Ginger Ale</h5>
                <p className="price">$2.99</p>
              </div>
            </div>
            <div className="item">
              <div className="top">
                <h5>Sierra Mist</h5>
                <p className="price">$2.99</p>
              </div>
            </div>
            <div className="item">
              <div className="top">
                <h5>Sweet Tea</h5>
                <p className="price">$2.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinksPage;
