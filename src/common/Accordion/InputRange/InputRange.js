import style from "./InputRange.module.css";
import numberFormat from "../../../utils/numberFormat";

const InputRange = ({ name, value, onChange, min, max, step }) => {
  return (
    <section className={style.range}>
      <input
        type="range"
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
      <label>از 0 تا {numberFormat(value)} تومان</label>
    </section>
  );
};

export default InputRange;
