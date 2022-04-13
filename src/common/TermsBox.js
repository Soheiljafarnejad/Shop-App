import { BiErrorCircle } from "react-icons/bi";
import style from "./style.module.css";
import { TiTick } from "react-icons/ti";

const TermsBox = ({ className, formik, name, label }) => {
  return (
    <div
      className={`${style.formControl} ${style.checkBox} ${className || ""}`}
    >
      <input
        type="checkbox"
        id={name}
        name={name}
        value={!formik.values[name]}
        {...formik.getFieldProps(name)}
        checked={formik.values[name]}
      />
      <label htmlFor={name}>
        <div
          className={`${style.tick} ${formik.values[name] && style.checked}`}
        >
          <TiTick />
        </div>
        {label}
      </label>
      <span className={`${formik.errors[name] ? style.error : ""}`}>
        <BiErrorCircle />
        {formik.errors[name]}
      </span>
    </div>
  );
};

export default TermsBox;
