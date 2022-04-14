import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../context/Container";
import style from "./CartList.module.css";
import { BiTrashAlt } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { VscSymbolRuler } from "react-icons/vsc";
import { BiStoreAlt } from "react-icons/bi";
import EmptyCom from "../Empty/Empty";

const CartList = () => {
  const { cart, totalPrice, discount } = useCart();
  const dispatch = useCartActions();
  return (
    <section className={`container ${style.cartContainer}`}>
      <h2>سبد خرید</h2>
      {cart.length === 0 ? (
        <EmptyCom />
      ) : (
        <section className={style.cart}>
          <section className={style.productList}>
            <div className={style.header}>
              <p>سبد خرید شما</p>
              <span>{cart.length} کالا</span>
            </div>
            {cart.map((item) => {
              return (
                <section key={item.id} className={style.product}>
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
                      <h4>{item.name}</h4>
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
            })}
          </section>
          <div className={style.cartSummary}>
            <div>
              <span>قیمت کالا</span>
              <p>{totalPrice + discount} تومان</p>
            </div>
            <div>
              <span>سود شما از این خرید</span>
              <p>{discount} تومان</p>
            </div>
            <p className={style.info}>
              هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه
              می‌شود
            </p>
            <div className={style.cartSummaryTotal}>
              <div>
                <span>جمع سبد خرید</span>
                <p>{totalPrice} تومان</p>
              </div>

              <Link to="/login">ادامه خرید</Link>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default CartList;
