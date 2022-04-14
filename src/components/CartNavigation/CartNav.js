import { NavLink, Outlet } from "react-router-dom";
import style from "./CartNav.module.css";

const CartList = () => {
  const path = [
    { to: "in", title: "سبد خرید" },
    { to: "next", title: "خرید بعدی" },
  ];

  return (
    <section className={`container ${style.cartContainer}`}>
      <div className={style.navCart}>
        {path.map((item) => {
          return (
            <NavLink
              className={(e) =>
                `${e.isActive ? `${style.activeLink}` : ""}`
              }
              to={item.to}
            >
              <h3>{item.title}</h3>
            </NavLink>
          );
        })}
      </div>
      <Outlet />
    </section>
  );
};

export default CartList;
