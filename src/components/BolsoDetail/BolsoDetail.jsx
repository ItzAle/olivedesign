import React, { useEffect, useState } from "react";
import style from "./BolsoDetail.module.css";
import { useParams } from "react-router-dom";
import productServices from "../../apiServices/productServices";
import Loader from "../../components/Loader/loader";
import Mobile from "../../components/Mobile/Mobile";
import Navbar from "../nav/navbar";
import NavMobile from "../NavMobile/NavMobile";

function BolsoDetail() {
  let { id } = useParams();
  let [productos, setProductos] = useState({ actores: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productServices.getById(id).then((data) => {
      setProductos(data);
      console.log(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={style.productoDetail}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style.div1}>
          <NavMobile />
          <div className={style.div2}>
            <h1 className={style.name}>{productos.name}</h1>
            <img className={style.productoImg} src={productos.img} alt="img" />
            <p className={style.desc}>{productos.desc}</p>
          </div>
          <Mobile />
        </div>
      )}
    </div>
  );
}

export default BolsoDetail;
