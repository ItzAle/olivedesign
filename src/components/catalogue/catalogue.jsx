import React, { useEffect, useState } from "react";
import productServices from "../../apiServices/productServices";
import style from "./catalogue.module.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavMobile from "../NavMobile/NavMobile";

function Catalogue() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAlldata();
  }, []);

  function getAlldata() {
    productServices.getAll().then((data) => {
      setProductos(data);
      setIsLoading(false);
    });
  }

  return (
    <div>
      <ToastContainer />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style.inputContainer}>
          <div className={style.card}>
            <NavMobile />
            <div className={style.img}>
              {productos.map((productos) => (
                <div key={productos.id} className={style.button_card}>
                  <Link to={`/producto/${productos.id}`}>
                    <img
                      className={style.imgContent}
                      src={productos.img}
                      alt="img"
                    />
                    <p className={style.name}>{productos.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogue;
