import { products } from "../../data";
import style from "./ProductList.module.css";
const ProductList = () => {
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
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default ProductList;
