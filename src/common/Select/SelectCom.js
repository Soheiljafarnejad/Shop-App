import style from "./SelectCom.module.css";
const SelectCom = ({ title, options, onChange, value }) => {
  return (
    <div className={style.container}>
      <span>{title}</span>
      <section className={style.options}>
        {options.map((item) => {
          return (
            <div className={style.option} key={item.value}>
              <input
                type="radio"
                id={item.value}
                name="size"
                value={item.value}
                onChange={onChange}
                checked={parseInt(value) === parseInt(item.value)}
              />
              <label htmlFor={item.value}>{item.value}</label>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default SelectCom;
