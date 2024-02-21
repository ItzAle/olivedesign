import React from "react";
import Mobile from "../../components/Mobile/Mobile";
import BolsoDetail from "../../components/BolsoDetail/BolsoDetail";
import Style from "./ProductoDetail.module.css";

const ProductoDetail = () => {
  return (
    <div className={Style.div}>
      <BolsoDetail />
      <Mobile />
    </div>
  );
};

export default ProductoDetail;
