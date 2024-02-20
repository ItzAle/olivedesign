import React, { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import style from "./OliveCard.module.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";

function OliveCard() {
  // Funcion para spinner de carga cuando esta cargando
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    LoadinFalse();
  }, []);

  function LoadinFalse() {
    setIsLoading(false);
  }
  //
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style.inputContainer}>
          <div className={style.OliveCard}>
            <img className={style.img} src={logo} alt="" />
            <p className={style.h1}>Handmade crochet pieces 🧶</p>
            <Link to={"/productos"}>
              <button className={style.button}>
                <p>Mira nuestros productos aquí</p>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default OliveCard;
