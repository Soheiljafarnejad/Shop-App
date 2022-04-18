import EmptyCom from "../../components/Empty/Empty";
import Cart from "../../common/Cart/Cart";
import { Link } from "react-router-dom";
import style from "./InCartPage.module.css";
import { useSelector } from "react-redux";
import {
  changeCart,
  decrementCart,
  incrementCart,
} from "../../redux/cartReducer";
import { changeNextCart } from "../../redux/nextCartReducer";
import numberFormat from "../../utils/numberFormat";

const InCartPage = () => {
  const { cart, totalPrice, discount } = useSelector((store) => store.cart);

  return cart.length === 0 ? (
    <EmptyCom
      title="سبد خرید شما خالی است!"
      description="برای مشاهده محصولات به صفحه زیر بروید:"
      titleLink="صفحه اصلی"
      to="/"
    />
  ) : (
    <section className={style.container}>
      <Cart
        cart={cart}
        decrementCart={decrementCart}
        incrementCart={incrementCart}
        changeCart={changeNextCart}
        clearCart={changeCart}
        title="سبد خرید شما"
        titleLink="انتقال به خرید بعدی"
      />
      <div className={style.cartSummary}>
        <div>
          <span>قیمت کالا</span>
          <p>{numberFormat(totalPrice + discount)} تومان</p>
        </div>
        <div>
          <span>سود شما از این خرید</span>
          <p>{numberFormat(discount)} تومان</p>
        </div>
        <p className={style.info}>
          هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه
          می‌شود
        </p>
        <div className={style.cartSummaryTotal}>
          <div>
            <span>جمع سبد خرید</span>
            <p>{numberFormat(totalPrice)} تومان</p>
          </div>

          <Link to="/login">ادامه خرید</Link>
        </div>
      </div>
    </section>
  );
};

export default InCartPage;
