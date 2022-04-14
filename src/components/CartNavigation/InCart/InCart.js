import EmptyCom from "../../Empty/Empty";
import { useCart, useCartActions } from "../../context/Container";
import { Link } from "react-router-dom";
import style from "./InCart.module.css";
import Cart from "../Cart/Cart";
const InCart = () => {
  const { cart, totalPrice, discount } = useCart();

  return cart.length === 0 ? (
    <EmptyCom />
  ) : (
    <section className={style.inCart}>
      <section className={style.cartList}>
        <div className={style.inCartHeader}>
          <p>سبد خرید شما</p>
          <span>{cart.length} کالا</span>
        </div>
        <Cart />
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
  );
};

export default InCart;
