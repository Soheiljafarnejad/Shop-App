import { useState } from "react";
import Accordion from "../../common/Accordion/Accordion";
import InputRadio from "../../common/Accordion/InputRadio/InputRadio";
import InputRange from "../../common/Accordion/InputRange/InputRange";
import { BiLogInCircle } from "react-icons/bi";
import style from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filtered } from "../../redux/productReducer";
const FilterCom = ({ setToggle }) => {
  const { filterItem } = useSelector((store) => store.products);
  const dispatch = useDispatch();

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
    size: "",
    price: 1500000,
  };

  const [value, setValue] = useState(initState);
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    dispatch(filtered({ ...value, [e.target.name]: e.target.value }));
  };

  const deleteFilterHandler = () => {
    dispatch(filtered(initState));
    setValue(initState);
    setToggle(false);
  };
  console.log(filterItem);
  return (
    <section className={style.container}>
      <div className={style.header}>
        <BiLogInCircle
          className={`icons ${style.exitFilter}`}
          onClick={() => setToggle(false)}
        />
        <h3>
          فیلترها
          {filterItem.length > 0 && (
            <span className="badge">{filterItem.length}</span>
          )}
        </h3>
        <p onClick={deleteFilterHandler}>حذف فیلترها</p>
      </div>
      <Accordion title="سایز">
        <InputRadio
          name="size"
          onChange={onChange}
          value={value.size}
          options={options}
        />
      </Accordion>
      <Accordion title="محدوده قیمت">
        <InputRange
          name="price"
          value={value.price}
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
