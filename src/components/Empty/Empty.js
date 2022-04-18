import style from "./Empty.module.css";
import imgEmpty from "../../assets/img/empty-sfl.png";
import { Link } from "react-router-dom";
const EmptyCom = ({ title, description, titleLink, to }) => {
  return (
    <section className={style.empty}>
      <img src={imgEmpty} alt="Empty-list" />
      <h4>{title}</h4>
      <p> {description}</p>
      {to && (
        <Link to={to}>
          <button>{titleLink}</button>
        </Link>
      )}
    </section>
  );
};

export default EmptyCom;
