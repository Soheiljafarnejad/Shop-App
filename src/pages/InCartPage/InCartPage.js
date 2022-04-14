import { useCart } from "../../components/context/Container";
import EmptyCom from "../../components/Empty/Empty";
import Cart from "../../common/Cart/Cart";
import CartSummary from "../../common/CartSummary/CartSummary";
import style from "./InCartPage.module.css";

const InCartPage = () => {
  const { cart } = useCart();

  return cart.length === 0 ? (
    <EmptyCom />
  ) : (
    <section className={style.container}>
      <Cart />
      <CartSummary />
    </section>
  );
};

export default InCartPage;
