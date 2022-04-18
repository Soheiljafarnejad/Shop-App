import style from "./HomePage.module.css";
import ProductList from "../../components/ProductList/ProductList";
import FilterCom from "../../components/Filter/Filter";
import { BiSliderAlt } from "react-icons/bi";
import { useState } from "react";
const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className={`container ${style.container}`}>
      <section className={`${style.filter} ${toggle ? style.toggle : ""}`}>
        <FilterCom setToggle={setToggle} />
      </section>
      <section className={style.product}>
        <section className={style.slider}>
          <div className={style.slider__filter} onClick={() => setToggle(true)}>
            <p>فیلترها</p>
            <BiSliderAlt className="icons" />
          </div>
        </section>
        <ProductList />
      </section>
    </section>
  );
};

export default HomePage;
