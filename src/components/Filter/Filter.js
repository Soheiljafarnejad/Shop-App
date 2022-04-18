import Accordion from "../../common/Accordion/Accordion";
import InputRadio from "../../common/Accordion/InputRadio/InputRadio";
import InputRange from "../../common/Accordion/InputRange/InputRange";
import { BiLogInCircle } from "react-icons/bi";
import style from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterDelete,
  filterProduct,
  filterValue,
} from "../../redux/productReducer";
const FilterCom = ({ setToggle }) => {
  const { filterItem, total } = useSelector((store) => store.products);
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

  const onChange = (e) => {
    const values = { ...filterItem, [e.target.name]: e.target.value };
    dispatch(filterValue(values));
    dispatch(filterProduct(values));
  };

  const deleteFilterHandler = () => {
    dispatch(filterDelete());
    setToggle(false);
  };
  return (
    <section className={style.container}>
      <div className={style.header}>
        <BiLogInCircle
          className={`icons ${style.exitFilter}`}
          onClick={() => setToggle(false)}
        />
        <h3>
          فیلترها
          {total.length > 0 && <span className="badge">{total.length}</span>}
        </h3>
        <p onClick={deleteFilterHandler}>حذف فیلترها</p>
      </div>
      <Accordion title="سایز">
        <InputRadio
          name="size"
          onChange={onChange}
          value={filterItem.size}
          options={options}
        />
      </Accordion>
      <Accordion title="محدوده قیمت">
        <InputRange
          name="price"
          value={filterItem.price}
          onChange={onChange}
          step={100000}
          min={0}
          max={1000000}
        />
      </Accordion>
    </section>
  );
};

export default FilterCom;
