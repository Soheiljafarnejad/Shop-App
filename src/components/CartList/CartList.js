import { useCart, useCartActions } from "../context/Container";
import style from "./CartList.module.css";
const CartList = () => {
  const cart = useCart();
  const dispatch = useCartActions();
  return (
    <section>
      <section className={`container ${style.productList}`}>
        {cart.map((item) => {
          return (
            <section key={item.id} className={style.product}>
              <div className={style.img}>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <h4 className={style.title}>{item.name}</h4>
                <p className={style.price}>{item.price}</p>
                <p className={style.price}>{item.quantity}</p>
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
