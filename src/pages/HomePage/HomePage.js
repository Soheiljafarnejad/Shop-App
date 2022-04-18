import style from "./HomePage.module.css";
import ProductList from "../../components/ProductList/ProductList";
import FilterCom from "../../components/Filter/Filter";
import { BiSliderAlt } from "react-icons/bi";
import { useState } from "react";
import { useSelector } from "react-redux";
const HomePage = () => {
  const { filterItem } = useSelector((store) => store.products);
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
            <div className={style.icon}>
              <BiSliderAlt className="icons" />
              {filterItem.length > 0 && <span className={style.badge}></span>}
            </div>
          </div>
        </section>
        <ProductList />
      </section>
    </section>
  );
};

export default HomePage;
