import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import style from "./CartNav.module.css";

const CartList = () => {
  const { cart, nextCart } = useSelector((store) => store);
  const path = [
    { to: "in", title: "سبد خرید", value: cart.cart.length },
    { to: "next", title: "خرید بعدی", value: nextCart.cart.length },
  ];

  return (
    <section className={`container ${style.cartContainer}`}>
      <div className={style.navCart}>
        {path.map((item) => {
          return (
            <NavLink
              key={item.to}
              className={(e) => `${e.isActive ? `${style.activeLink}` : ""}`}
              to={item.to}
            >
              <h3 className={style.title}>
                <span> {item.title}</span>
                <p className="badge">{item.value}</p>
              </h3>
            </NavLink>
          );
        })}
      </div>

      <Outlet />
    </section>
  );
};

export default CartList;
