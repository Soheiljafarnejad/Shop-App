import { addCart, deleteCart } from "../../redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import numberFormat from "../../utils/numberFormat";
import style from "./CartDetail.module.css";
import { products } from "../../data";
import { AiOutlineSafety } from "react-icons/ai";
import { VscSymbolRuler } from "react-icons/vsc";
import { BiStoreAlt } from "react-icons/bi";
import { RiRocketLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import checked from "../../utils/cheked";
import queryString from "query-string";
import Select from "../../common/Select/SelectCom";
import { useState } from "react";

const CartDetail = () => {
  const { search } = useLocation();
  const parsed = queryString.parse(search);
  const [state] = products.filter((item) => item.id === parseInt(parsed.id));
  const options = state.size.map((item) => {
    return { value: item };
  });
  const [value, setValue] = useState(options[0].value);
  const { cart } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <section className={`container ${style.container}`}>
      <section className={style.cartList}>
        <div className={style.header}>
          <h2>{state.name}</h2>
          <Link to="/" className={style.link}>
            برگشت
          </Link>
        </div>
        <section className={style.cart}>
          <img src={state.image} alt={state.name} className={style.cartImg} />
          <div className={style.cartBody}>
            <Select
              options={options}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              title={`اندازه ${value}`}
            />
            <p className={style.star}>
              <span>{state.star}</span>
              <AiTwotoneStar className="icons gold" />
            </p>
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
            <h2>فروشنده : آنلاین شاپ</h2>
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
          {state.fast && (
            <li>
              <RiRocketLine className="icons purple" />
              <span>ارسال سریع</span>
            </li>
          )}
          <li className={style.discount}>
            <p> {numberFormat(state.price-state.offPrice)} تومان تخفیف </p>
          </li>
        </ul>
        <div className={style.cartSummaryFooter}>
          <div>
            <span>قیمت با تخفیف</span>
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
            <button
              type="button"
              onClick={() => dispatch(addCart(state, value))}
            >
              اضافه به سبد خرید
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartDetail;
