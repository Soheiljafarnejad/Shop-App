import Accordion from "../../common/Accordion/Accordion";
import InputRadio from "../../common/Accordion/InputRadio/InputRadio";
import InputRange from "../../common/Accordion/InputRange/InputRange";
import {
  filterDelete,
  filterProduct,
  filterValue,
  sortProduct,
} from "../../redux/filterReducer";
import { IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import style from "./Filter.module.css";
import { sizeOptions } from "../../data";
const FilterCom = ({ setToggle }) => {
  const { filterItem, total, productList } = useSelector(
    (store) => store.filter
  );
  const dispatch = useDispatch();

  const onChange = (e) => {
    const values = { ...filterItem, [e.target.name]: e.target.value };
    dispatch(filterValue(values));
    dispatch(filterProduct(values));
    dispatch(sortProduct());
  };

  const deleteFilterHandler = () => {
    dispatch(filterDelete());
    dispatch(sortProduct());
    setToggle(false);
  };
  return (
    <section className={style.container}>
      <div className={style.header}>
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
          value={parseInt(filterItem.size)}
          options={sizeOptions}
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
      <div className={style.footer} onClick={() => setToggle(false)}>
        <p>مشاهده {productList.length} کالا</p>
        <IoIosArrowUp className="icons" />
      </div>
    </section>
  );
};

export default FilterCom;
