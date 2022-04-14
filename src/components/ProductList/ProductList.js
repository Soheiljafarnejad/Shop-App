import { products } from "../../data";
import style from "./ProductList.module.css";
import { FiShoppingBag } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartReducer";
const ProductList = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  return (
    <section className={`container ${style.productList}`}>
      {products.map((item) => {
        return (
          <section key={item.id} className={style.product}>
            <div className={style.img}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={style.body}>
              <div className={style.header}>
                <h2 className={style.title}>{item.name}</h2>
              </div>
              <div className={style.footer}>
                <div className={style.price}>
                  <span>قیمت به تومان</span>
                  <div>
                    <p className={style.ofPrice}>{item.offPrice}</p>
                    <p className={style.discount}>{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(addCart(item))}
                  className={`${
                    cart.findIndex((cart) => cart.id === item.id) < 0
                      ? ""
                      : style.select
                  }`}
                >
                  {cart.findIndex((cart) => cart.id === item.id) < 0 ? (
                    <FiShoppingBag className="icons" />
                  ) : (
                    <BsBagCheck className="icons" />
                  )}
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default ProductList;
