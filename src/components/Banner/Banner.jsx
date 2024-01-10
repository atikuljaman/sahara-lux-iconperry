import { MdLocationPin } from "react-icons/md";

import bannerVid from "../../assets/banner-vid.mp4";
import poster from "../../assets/banner-poster.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <div className="banner_top">
        <video controls poster={poster} autoPlay="autoplay" loop muted>
          <source src={bannerVid} type="video/mp4" />
        </video>
      </div>

      <div className="banner_bottom">
        <div className="address container">
          <MdLocationPin className="icon" />{" "}
          <p>5601 N High St, Worthington, Ohio 43085 USA</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
