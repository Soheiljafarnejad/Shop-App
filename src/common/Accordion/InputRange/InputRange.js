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
      <label>
        <span> از <strong>0</strong> تومان</span>
        <span> تا <strong>{numberFormat(value)}</strong> تومان</span>
      </label>
    </section>
  );
};

export default InputRange;
