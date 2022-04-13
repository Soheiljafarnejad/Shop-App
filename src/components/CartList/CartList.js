import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../context/Container";
import style from "./CartList.module.css";
const CartList = () => {
  const { cart, totalPrice, discount } = useCart();
  const dispatch = useCartActions();
  return (
    <section className={`container ${style.cart}`}>
      <section className={style.cartSummary}>
        <p>price{totalPrice + discount}$</p>
        <p>dispatch:{discount}$</p>
        <p>totalPrice:{totalPrice}$</p>
        <Link to="/login">go to checkout</Link>
      </section>
      <section className={style.productList}>
        {cart.map((item) => {
          return (
            <section key={item.id} className={style.product}>
              <div className={style.img}>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.price * item.quantity}</p>
                <p>{item.quantity}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT_CART", payload: item })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT_CART", payload: item })
                  }
                >
                  -
                </button>
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default CartList;
