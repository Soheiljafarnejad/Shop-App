import style from "./HomePage.module.css";
import ProductList from "../../components/ProductList/ProductList";
import FilterCom from "../../components/Filter/Filter";
import { BiSliderAlt } from "react-icons/bi";
import { FaSortAmountUp } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import Sort from "../../components/Sort/Sort";
const HomePage = () => {
  const { total } = useSelector((store) => store.products);
  const [toggle, setToggle] = useState(false);
  return (
    <section className={`container ${style.container}`}>
      <section className={`${style.filter} ${toggle ? style.toggle : ""}`}>
        <FilterCom setToggle={setToggle} />
      </section>
      <section className={style.product}>
        <section className={style.slider}>
          <div
            className={`${style.slider__box} ${style.slider__filter}`}
            onClick={() => setToggle(true)}
          >
            <div className={style.icon}>
              <BiSliderAlt className="icons" />
              {total.length > 0 && <span className={style.badge}></span>}
            </div>
            <p>فیلترها</p>
          </div>
          <div className={`${style.slider__box} ${style.slider__sort}`}>
            <div>
              <FaSortAmountUp className="icons" />
            </div>
            <p>
              مرتب سازی <span>:</span>
            </p>
            <Sort />
          </div>
        </section>
        <ProductList />
      </section>
    </section>
  );
};

export default HomePage;
