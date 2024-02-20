import style from "./error.module.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className={style.div}>
      <h1>
        Error <span>404</span>{" "}
      </h1>
      <h1>No se encuentra lo que buscas</h1>
      <p className={style.volver}>
        <Link to={"/"}>Volver a Inicio</Link>
      </p>
    </div>
  );
}

export default Error;
