import style from "./Login.module.css";
import Input from "../../common/Forms/Input";
import TermsBox from "../../common/Forms/TermsBox";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    remember: true,
  };

  const onSubmit = (values) => {
    // post values to Api
    navigate("/");
    toast.success("ورود با موفقیت انجام شد.");
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("ایمیل نمی تواند خالی باشد.")
      .email("لطفا ایمیل را به صورت کامل و صحیح وارد کنید."),

    password: yup
      .string()
      .required("رمز عبور نمی تواند خالی باشد.")
      .min(8, "رمز عبور نمی تواند کمتر از 8 کاراکتر باشد.")
      .max(64, "رمز عبور نمی تواند بیشتر از 64 کاراکتر باشد."),

    remember: yup.boolean(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <section className={`container ${style.login}`}>
      <div className={style.title}>
        <h4>ورود </h4>
        <p>لطفا نام کاربری و رمز عبور خود را وارد کنید.</p>
      </div>

      <form onSubmit={formik.handleSubmit} noValidate>
        <div className={style.formControl}>
          <Input
            label="آدرس ایمیل (نام کاربری)"
            name="email"
            type="email"
            formik={formik}
            props={{ placeholder: "example@gmail.com" }}
          />
        </div>

        <div className={style.formControl}>
          <Input
            label="کلمه عبور"
            name="password"
            type="password"
            formik={formik}
            props={{ minLength: 3, maxLength: 64, placeholder: "کلمه عبور" }}
          />
        </div>

        <div className={`${style.formControl} ${style.remember}`}>
          <TermsBox
            formik={formik}
            name="remember"
            label="برای دفعه بعدی مرا به خاطر بسپار."
          />
        </div>

        <div className={style.footer}>
          <button className={style.submit} type="submit">
            ورود
          </button>
          <Link to="/sign-up">حساب کاربری نساخته اید؟ ثبت نام</Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
