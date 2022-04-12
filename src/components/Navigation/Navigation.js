import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const items = [
    { to: "/", title: "Home" },
    { to: "/cart", title: "cart" },
  ];

  return (
    <section className={`${style.navigation} ${toggle ? style.toggle : ""}`}>
      <button onClick={() => setToggle(!toggle)} className={style.menu}>
        <div className={style.one}></div>
        <div className={style.two}></div>
        <div className={style.there}></div>
      </button>
      <div className={style.title}>
        <h1>online shop</h1>
      </div>
      <nav className={style.nav}>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink
                  className={(e) =>
                    `${e.isActive ? `${style.activeLink}` : ""}`
                  }
                  to={item.to}
                  onClick={() => setToggle(false)}
                >
                  <h3>{item.title}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
