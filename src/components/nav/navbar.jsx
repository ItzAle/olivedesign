import React from "react";
import style from "./navbar.module.css";
import "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <div>
      <section>
        <nav>
          <Link to={"/"}>
            <img className={style.logo} src={logo} alt="logo" />
          </Link>
          <div className={style.nav}>
            <Link to={"/"}>
              <h2>INICIO</h2>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
