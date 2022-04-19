import style from "./SortCom.module.css";
import { sortOptions } from "../../data";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

const SortCom = ({ setToggle }) => {
  const [value, setValue] = useState("all");

  const handler = (e) => {
    setValue(e.target.value);
    setToggle(false);
  };

  return (
    <section className={style.container}>
      <div className={style.header}>
        <h3>مرتب سازی بر اساس</h3>
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
                checked={item.value === value}
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
