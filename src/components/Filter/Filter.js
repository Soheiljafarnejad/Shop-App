import { useState } from "react";
import Accordion from "../../common/Accordion/Accordion";
import InputRadio from "../../common/Accordion/InputRadio/InputRadio";
import style from "./Filter.module.css";
const FilterCom = () => {
  const options = [
    { value: 39, label: 39 },
    { value: 40, label: 40 },
    { value: 41, label: 41 },
    { value: 42, label: 42 },
  ];

  const [size, setSize] = useState(options[0].value);
  const onChange = (e) => {
    setSize(e.target.value);
    console.log(e.target.value);
  };

  return (
    <section className={style.container}>
      <div className={style.header}>
        <h3>فیلتر ها</h3>
        <button>حذف فیلتر</button>
      </div>
      <Accordion title={"سایز"}>
        <InputRadio
          name="size"
          onChange={(e) => onChange(e)}
          value={size}
          options={options}
        />
      </Accordion>
    </section>
  );
};

export default FilterCom;
