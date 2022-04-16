import style from "./Cart.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { VscSymbolRuler } from "react-icons/vsc";
import { BiStoreAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import numberFormat from "../../utils/numberFormat";
const Cart = ({
  cart,
  changeCart,
  incrementCart,
  decrementCart,
  clearCart,
  title,
  titleLink,
}) => {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(changeCart(cart));
    dispatch(clearCart([]));
  };

  return (
    <section className={style.cartList}>
      <div className={style.containerHeader}>
        <div>
          <p>{title}</p>
          <span>{cart.length} کالا</span>
        </div>
        <p onClick={handler} className={style.link}>
          {titleLink}
        </p>
      </div>
      {cart.map((item) => {
        return (
          <section key={item.id} className={style.cart}>
            <div className={style.cartRight}>
              <img src={item.image} alt={item.name} />
              <div className={style.btnBox}>
                <BiPlus
                  className="icons"
                  onClick={() => dispatch(incrementCart(item))}
                />
                <div className={style.quantity}>
                  <p>{item.quantity}</p>
                  <span>تعداد</span>
                </div>
                {item.quantity === 1 ? (
                  <BiTrashAlt
                    className="icons"
                    onClick={() => dispatch(decrementCart(item))}
                  />
                ) : (
                  <BiMinus
                    className="icons"
                    onClick={() => dispatch(decrementCart(item))}
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
                <span>گارانتی </span>
              </li>
              <li>
                <VscSymbolRuler />
                <span>{item.size.join(",")}</span>
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
                {numberFormat(item.price - item.offPrice)} تومان تخفیف
              </li>
              <li className={style.price}>
                {numberFormat(item.offPrice)} تومان
              </li>
            </ul>
          </section>
        );
      })}
    </section>
  );
};

export default Cart;
