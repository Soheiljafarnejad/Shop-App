import EmptyCom from "../../components/Empty/Empty";
import Cart from "../../common/Cart/Cart";
import style from "./NextCartPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNextCart,
  decrementNextCart,
  incrementNextCart,
} from "../../redux/nextCartReducer";
import { changeCart } from "../../redux/cartReducer";

const NextCartPage = () => {
  const { cart } = useSelector((store) => store.nextCart);
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(changeCart(cart));
    dispatch(changeNextCart([]));
  };
  return cart.length === 0 ? (
    <EmptyCom />
  ) : (
    <section className={style.container}>
      <Cart
        cart={cart}
        decrementCart={decrementNextCart}
        incrementCart={incrementNextCart}
        changeCart={changeCart}
        clearCart={changeNextCart}
        title="سبد خرید بعدی شما"
        titleLink="انتقال به سبد خرید اصلی"
      />
      <div className={style.cartSummary}>
        <span>لیست خرید بعدی چیست؟</span>
        <p className={style.info}>
          شما می‌توانید محصولاتی که به سبد خرید خود افزوده اید و موقتا قصد خرید
          آن‌ها را ندارید، در لیست خرید بعدی خود قرار داده و هر زمان مایل بودید
          آن‌ها را مجدداً به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
        </p>
        <div className={style.cartSummaryBtn}>
          <div>
            <span>{cart.length} کالا در لیست خرید بعدی شماست</span>
          </div>
          <p onClick={handler} className={style.send}>
            انتقال همه به سبد خرید
          </p>
        </div>
      </div>
    </section>
  );
};

export default NextCartPage;
