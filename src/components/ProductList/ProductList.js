import { products } from "../../data";
import { useCart, useCartActions } from "../context/Container";
import style from "./ProductList.module.css";
const ProductList = () => {
  const dispatch = useCartActions();
  const cart = useCart();
  return (
    <section className={`container ${style.productList}`}>
      {products.map((item) => {
        return (
          <section key={item.id} className={style.product}>
            <div className={style.img}>
              <img src={item.image} alt={item.name} />
            </div>
            <div>
              <h4 className={style.title}>{item.name}</h4>
              <p className={style.price}>{item.price}</p>
              <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
              >
                {cart.findIndex((cart) => cart.id === item.id) < 0
                  ? "add to cart"
                  : "added"}
              </button>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default ProductList;
