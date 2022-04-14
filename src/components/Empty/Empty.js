import style from "./Empty.module.css";
import imgEmpty from "../../assets/img/empty-sfl.png";
import { Link } from "react-router-dom";
const EmptyCom = () => {
  return (
    <section className={style.empty}>
      <img src={imgEmpty} alt="Empty list !" />
      <h4>سبد خرید شما خالی است!</h4>
      <p> برای مشاهده محصولات به صفحه زیر بروید:</p>
      <Link to="/">
        <button>صفحه اصلی</button>
      </Link>
    </section>
  );
};

export default EmptyCom;
