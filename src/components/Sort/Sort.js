import style from "./Sort.module.css";
import {sortOptions} from "../../data";
const Sort = () => {
  const handler = (e) => {
    console.log(e.target.value);
  };
  return (
    <section className={style.container}>
      <div className={style.sort}>
        {sortOptions.map((item) => {
          return (
            <div className={style.sortItem} key={item.value}>
              <input
                type="radio"
                value={item.value}
                name="sort"
                id={item.value}
              />
              <label htmlFor={item.value} onClick={handler}>
                {item.label}
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sort;
