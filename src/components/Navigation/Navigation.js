import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { totalCart } from "../../redux/cartReducer";
const Navigation = () => {
  const { cart, totalQuantity } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalCart());
  }, [cart, dispatch]);

  return (
    <section className={style.navigation}>
      <div className={style.title}>
        <NavLink
          to="/"
          className={(e) =>
            `${style.loginBox} ${e.isActive ? `${style.activeLink}` : ""}`
          }
        >
          <h1>فروشگاه</h1>
        </NavLink>
      </div>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="/cart/in">
              <div className={style.cart}>
                <BsCart2 className="icons" />
                <span className={style.badge}>{totalQuantity}</span>
              </div>
            </NavLink>
          </li>
          <li>
            <div className={style.profile}>
              <NavLink
                className={(e) =>
                  `${style.loginBox} ${e.isActive ? `${style.activeLink}` : ""}`
                }
                to="/login"
              >
                <div className={style.login}>
                  <HiOutlineLogin className="icons" />
                  <span>ورود</span>
                </div>
              </NavLink>
              <NavLink
                className={(e) => `${e.isActive ? `${style.activeLink}` : ""}`}
                to="/sign-up"
              >
                <span>ثبت نام</span>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
