import { useState } from "react";
import Accordion from "../../common/Accordion/Accordion";
import InputRadio from "../../common/Accordion/InputRadio/InputRadio";
import InputRange from "../../common/Accordion/InputRange/InputRange";
import style from "./Filter.module.css";
const FilterCom = () => {
  const options = [
    { value: 37, label: `سایز 37` },
    { value: 38, label: `سایز 38` },
    { value: 39, label: `سایز 39` },
    { value: 40, label: `سایز 40` },
    { value: 41, label: `سایز 41` },
    { value: 42, label: `سایز 42` },
    { value: 43, label: `سایز 43` },
    { value: 44, label: `سایز 44` },
  ];

  const initState = {
    size: options[0].value,
    price: 1500000,
  };

  const [filterValue, setFilterValue] = useState(initState);
  const onChange = (e) => {
    setFilterValue({ ...filterValue, [e.target.name]: e.target.value });
  };
  console.log(filterValue);

  return (
    <section className={style.container}>
      <div className={style.header}>
        <h3>فیلتر ها</h3>
        <p>حذف فیلتر</p>
      </div>
      <Accordion title="سایز">
        <InputRadio
          name="size"
          onChange={(e) => onChange(e)}
          value={filterValue.size}
          options={options}
        />
      </Accordion>
      <Accordion title="محدوده قیمت">
        <InputRange
          name="price"
          value={filterValue.price}
          onChange={onChange}
          step={100000}
          min={0}
          max={initState.price}
        />
      </Accordion>
    </section>
  );
};

export default FilterCom;
