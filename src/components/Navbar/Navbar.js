// import { useEffect, useState } from "react";
import "./Navbar.css";
// import logo from "./public/nav__logo";
import logo from "./netflix-logo.png";
import logo2 from "./Netflix-avatar.png";

const Navbar = () => {
  // const [show, setShow] = useState(false);
  // useEffect(() => {

  // }, []);

  return (
    <div className="nav">
      {/* <div className="nav__logo"> */}
      <img src={logo} alt="NetflixLogo" className="nav__logo" />
      {/* </div> */}
      {/* <div className="nav__avatar"> */}
      <img src={logo2} alt="avatar" className="nav__avatar" />
      {/* </div> */}
    </div>
  )
};

export default Navbar;