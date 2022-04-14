import style from "./Cart.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { VscSymbolRuler } from "react-icons/vsc";
import { BiStoreAlt } from "react-icons/bi";
import { useCart, useCartActions } from "../../context/Container";
const Cart = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  return cart.map((item) => {
    return (
      <section key={item.id} className={style.cart}>
        <div className={style.cartRight}>
          <img src={item.image} alt={item.name} />
          <div className={style.btnBox}>
            <BiPlus
              className="icons"
              onClick={() =>
                dispatch({ type: "INCREMENT_CART", payload: item })
              }
            />
            <div className={style.quantity}>
              <p>{item.quantity}</p>
              <span>تعداد</span>
            </div>
            {item.quantity === 1 ? (
              <BiTrashAlt
                className="icons"
                onClick={() =>
                  dispatch({ type: "DECREMENT_CART", payload: item })
                }
              />
            ) : (
              <BiMinus
                className="icons"
                onClick={() =>
                  dispatch({ type: "DECREMENT_CART", payload: item })
                }
              />
            )}
          </div>
        </div>
        <ul className={style.cartLeft}>
          <li>
            <h2>{item.name}</h2>
          </li>
          <li>
            <AiOutlineSafety />
            <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
          </li>
          <li>
            <VscSymbolRuler />
            <span>size</span>
          </li>
          <li>
            <BiStoreAlt />
            <span>موجود در انبار</span>
          </li>
          <li>
            <span>
              <FiTruck />
              ارسال سریع
            </span>
          </li>
          <li className={style.discount}>
            {item.price - item.offPrice} تومان تخفیف
          </li>
          <li className={style.price}>{item.offPrice} تومان</li>
        </ul>
      </section>
    );
  });
};

export default Cart;
