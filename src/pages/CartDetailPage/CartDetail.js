import style from "./CartDetail.module.css";
import { AiOutlineSafety } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { VscSymbolRuler } from "react-icons/vsc";
import { BiStoreAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import numberFormat from "../../utils/numberFormat";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import checked from "../../utils/cheked";
import { addCart, deleteCart } from "../../redux/cartReducer";
import queryString from "query-string";
import { products } from "../../data";

const CartDetail = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const parsed = queryString.parse(search);
  const [state] = products.filter((item) => item.id === parseInt(parsed.id));

  return (
    <section className={`container ${style.container}`}>
      <section className={style.cartList}>
        <div className={style.Header}>
          <Link to="/" className={style.link}>
            برگشت
          </Link>
          <h2>{state.name}</h2>
        </div>
        <section className={style.cart}>
          <img src={state.image} alt={state.name} className={style.cartImg} />
          <div>
            <ul className={style.description}>
              <li>
                <h3>ویژگی ها</h3>
              </li>
              <li>
                <p>
                  کفی : <span>قابل تعویض</span>
                </p>
              </li>
              <li>
                <p>
                  نحوه بسته شدن کفش : <span>یکسره</span>
                </p>
              </li>
              <li>
                <p>
                  ویژگی‌های زیره : <span>انعطاف پذیر، مقاوم در برابر سایش</span>
                </p>
              </li>
              <li>
                <p>
                  ویژگی‌های تخصصی کفش : <span>قابلیت گردش هوا</span>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <div className={style.cartSummary}>
        <ul className={style.info}>
          <li>
            <h2>فروشنده : -</h2>
          </li>
          <li>
            <AiOutlineSafety className="icons" />
            <span>گارانتی سلامت فیزیکی کالا</span>
          </li>
          <li>
            <VscSymbolRuler className="icons" />
            <span>{state.size.join(",")}</span>
          </li>
          <li>
            <BiStoreAlt className="icons" />
            <span>موجود در انبار</span>
          </li>
          <li>
            <FiTruck className="icons" />
            <span>ارسال سریع</span>
          </li>
        </ul>
        <div className={style.cartSummaryFooter}>
          <div>
            <span>قیمت</span>
            <p>{numberFormat(state.offPrice)} تومان</p>
          </div>
          {checked(cart, state) ? (
            <button
              className={style.btnDelete}
              type="button"
              onClick={() => dispatch(deleteCart(state))}
            >
              حذف از سبد خرید
            </button>
          ) : (
            <button type="button" onClick={() => dispatch(addCart(state))}>
              اضافه به سبد خرید
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartDetail;
