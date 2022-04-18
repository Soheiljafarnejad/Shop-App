import style from "./ProductList.module.css";
import { FiShoppingBag } from "react-icons/fi";
import { RiRocketLine } from "react-icons/ri";
import { AiTwotoneStar } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartReducer";
import numberFormat from "../../utils/numberFormat";
import checked from "../../utils/checked";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { filtered } from "../../redux/productReducer";

const ProductList = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const { productList } = useSelector((store) => store.products);

  const clickHandler = (e, item, value) => {
    e.preventDefault();
    dispatch(addCart(item, value));
  };
  useEffect(() => {
    dispatch(
      filtered({
        size: "",
        price: 1500000,
      })
    );
  }, [dispatch]);
  return (
    <section className={`${style.productList}`}>
      {productList.map((item) => {
        return (
          <Link
            to={{ pathname: `/cart/${item.id}`, search: `id=${item.id}` }}
            key={item.id}
            className={style.product}
          >
            <div className={style.img}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={style.description}>
              <div className={style.header}>
                <h2 className={style.title}>{item.name}</h2>
              </div>
              <div className={style.body}>
                {item.fast && (
                  <p>
                    <RiRocketLine className="icons" />
                    <span>امکان ارسال سریع</span>
                  </p>
                )}
                <p className={style.star}>
                  <span>{item.star}</span>
                  <AiTwotoneStar className="icons" />
                </p>
              </div>
              <div className={style.footer}>
                <div className={style.price}>
                  <span>قیمت به تومان</span>
                  <div>
                    <p className={style.ofPrice}>
                      {numberFormat(item.offPrice)}
                    </p>
                    <p className={style.discount}>{numberFormat(item.price)}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => clickHandler(e, item, item.size[0])}
                  className={`${!checked(cart, item) ? "" : style.select}`}
                >
                  {!checked(cart, item) ? (
                    <FiShoppingBag className="icons" />
                  ) : (
                    <BsBagCheck className="icons" />
                  )}
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default ProductList;
