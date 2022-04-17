import { BiErrorCircle } from "react-icons/bi";
import style from "./style.module.css";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { useRef, useState } from "react";

const Input = ({ label, name, className, formik, type = "text", props }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const clickHandler = () => {
    if (visible) {
      ref.current.type = "password";
    } else {
      ref.current.type = "text";
    }
    setVisible(!visible);
  };

  return (
    <div className={`${style.formControl} ${className || ""}`}>
      <label htmlFor={name}>{label}</label>
      <div className={style.password}>
        <input
          ref={ref}
          type={type}
          id={name}
          name={name}
          value={formik.values[name]}
          {...formik.getFieldProps({ name })}
          {...props}
        />
        {type === "password" && (
          <div className={style.visible} onClick={clickHandler}>
            {visible ? <MdVisibilityOff /> : <MdVisibility />}
          </div>
        )}
      </div>
      <span
        className={`${
          formik.errors[name] && formik.touched[name] ? style.error : ""
        }`}
      >
        <BiErrorCircle />
        {formik.errors[name]}
      </span>
    </div>
  );
};

export default Input;
