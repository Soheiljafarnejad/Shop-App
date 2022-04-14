import { useCart } from "../../components/context/Container";
import { Link } from "react-router-dom";
import style from "./CartSummary.module.css";
const CartSummary = () => {
  const { totalPrice, discount } = useCart();
  return (
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
        هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود
      </p>
      <div className={style.cartSummaryTotal}>
        <div>
          <span>جمع سبد خرید</span>
          <p>{totalPrice} تومان</p>
        </div>

        <Link to="/login">ادامه خرید</Link>
      </div>
    </div>
  );
};

export default CartSummary;
