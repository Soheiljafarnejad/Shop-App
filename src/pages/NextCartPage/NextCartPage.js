import EmptyCom from "../../components/Empty/Empty";
import Cart from "../../common/Cart/Cart";
import style from "./NextCartPage.module.css";
import { useSelector } from "react-redux";
import {
    changeNextCart,
  decrementNextCart,
  incrementNextCart,
} from "../../redux/nextCartReducer";
import { changeCart } from "../../redux/cartReducer";

const NextCartPage = () => {
  const { cart } = useSelector((store) => store.nextCart);
  return cart.length === 0 ? (
    <EmptyCom title="سبد خرید بعدی شما خالی است!" />
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
    </section>
  );
};

export default NextCartPage;
