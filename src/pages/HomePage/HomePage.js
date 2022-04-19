import style from "./HomePage.module.css";
import ProductList from "../../components/ProductList/ProductList";
import FilterCom from "../../components/Filter/Filter";
import { BiSliderAlt } from "react-icons/bi";
import { FaSortAmountUp } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import SortCom from "../../components/Sort/SortCom";
const HomePage = () => {
  const { total } = useSelector((store) => store.products);
  const [filterToggle, setFilterToggle] = useState(false);
  const [sortToggle, setSortToggle] = useState(false);

  return (
    <section className={`container ${style.container}`}>
      <section
        className={`${style.filter} ${filterToggle ? style.toggle : ""}`}
      >
        <FilterCom setToggle={setFilterToggle} />
      </section>
      <section className={style.product}>
        <nav className={style.nav}>
          <section
            className={`${style.nav__box} ${style.nav__filter}`}
            onClick={() => setFilterToggle(true)}
          >
            <div className={style.icon}>
              <BiSliderAlt className="icons" />
              {total.length > 0 && <span className={style.badge}></span>}
            </div>
            <p>فیلترها</p>
          </section>
          <section
            className={`${style.nav__box} ${style.nav__sort}`}
            onClick={() => setSortToggle(true)}
          >
            <FaSortAmountUp className="icons" />
            <p>مرتب سازی :</p>
          </section>
          <section
            className={`${style.sort} ${sortToggle ? style.toggle : ""}`}
          >
            <SortCom setToggle={setSortToggle} />
          </section>
        </nav>
        <ProductList />
      </section>
    </section>
  );
};

export default HomePage;
