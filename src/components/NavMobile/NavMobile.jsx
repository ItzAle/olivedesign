import React from "react";
import Logo from "../../img/logo.png";
import style from "./NavMobile.module.css";
import { Link } from "react-router-dom";

function NavMobile() {
  return (
    <div className={style.nav}>
      <Link to={"/"}>
        <img className={style.logo} src={Logo} alt="logo" />
      </Link>
    </div>
  );
}

export default NavMobile;
