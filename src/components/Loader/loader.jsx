import { ColorRing } from "react-loader-spinner";
import style from "./loader.module.css";

function Loader() {
  return (
    <div className={style.loader}>
      <ColorRing
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
      />
    </div>
  );
}

export default Loader;
