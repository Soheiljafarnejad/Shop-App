import style from "./Accordion.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const Accordion = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className={`${style.accordion} ${toggle ? style.toggle : ""}`}>
      <div className={style.header} onClick={() => setToggle(!toggle)}>
        <p>{title}</p>
        <IoIosArrowDown className="icons" />
      </div>
      <div className={style.body}>{children}</div>
    </section>
  );
};

export default Accordion;
