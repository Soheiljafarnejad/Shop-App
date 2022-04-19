import style from "./InputRadio.module.css";
import { TiTick } from "react-icons/ti";
const InputRadio = ({ options, name, value, onChange }) => {
  return (
    <>
      {options.map((item) => {
        return (
          <div className={style.option} key={item.value}>
            <input
              type="radio"
              name={name}
              id={item.value}
              value={item.value}
              onChange={onChange}
              checked={(item.value) === (value)}
            />
            <label htmlFor={item.value}>
              <TiTick className="icons" />
              <p>{item.label}</p>
            </label>
          </div>
        );
      })}
    </>
  );
};

export default InputRadio;
