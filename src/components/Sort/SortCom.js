import style from "./SortCom.module.css";
import { sortOptions } from "../../data";
import { TiTick } from "react-icons/ti";
import { BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { sortProduct } from "../../redux/filterReducer";

const SortCom = ({ setToggle }) => {
  const { sort } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  const handler = (e) => {
    dispatch(sortProduct(e.target.value));
    setToggle(false);
  };

  return (
    <section className={style.container}>
      <div className={style.header}>
        <h3>مرتب سازی بر اساس</h3>
        <BiX className="icons" onClick={() => setToggle(false)} />
      </div>
      <div className={style.sort}>
        {sortOptions.map((item) => {
          return (
            <div className={style.option} key={item.value}>
              <input
                type="radio"
                value={item.value}
                name="sorta"
                id={item.value}
                onChange={handler}
                checked={item.value === sort}
              />
              <label htmlFor={item.value}>
                <TiTick className="icons" />
                <p>{item.label}</p>
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SortCom;
