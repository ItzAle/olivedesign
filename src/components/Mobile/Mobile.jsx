import React from "react";
import { BiHomeAlt, BiStar } from "react-icons/bi";
import { FiHome, FiInstagram } from "react-icons/fi";
import style from "./Mobile.module.css";
import { Link } from "react-router-dom";

function Mobile() {
  return (
    <div className={style.mobile__menu}>
      <Link to={"/"}>
        <FiHome />
      </Link>
      <Link to={{ pathname: "https://instagram.com/olivedsgn.nc" }} target="_blank"><FiInstagram /></Link>
    </div>
  );
}

export default Mobile;
