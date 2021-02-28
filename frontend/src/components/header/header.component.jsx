import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../images/PIGEON-SIN-FONDO-OK.png";
import "./header.styles.css";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const showDropDownFunction = () => {
    setShowDropDown(!showDropDown);
  };
return(
  <div>
    <div className="header">
      <Link className="header-link" to="/">
        <img src={logo} alt="logo" width="70" height="70.1" />
      </Link>
      <div className="header-menu">
        <div onClick={showDropDownFunction} className="header-link" to="/form">
          FORMS
        </div>
      </div>
    </div>
    {showDropDown ? <div className="dropDownContainer">
    <ul className="dropDown">
      <li><Link className="header-link" onClick={showDropDownFunction} to="/form/expedient">
      Create Expedient
    </Link></li>
      <li><Link className="header-link" onClick={showDropDownFunction} to="/form/substitute">
      Create Substitute
    </Link></li>
    </ul>
  </div>:<div></div> }
    
  </div>
)
}

export default Header;
