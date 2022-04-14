import style from "./SignUp.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../common/Input";
import TermsBox from "../../common/TermsBox";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Signup = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    phone: "",
    terms: false,
  };

  const onSubmit = (values) => {
    // post values to Api
    navigate("/");
    toast.success("ثبت نام با موفقیت انجام شد.");
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("ایمیل نمی تواند خالی باشد.")
      .email("لطفا ایمیل را به صورت کامل و صحیح وارد کنید."),

    password: yup
      .string()
      .required("رمز عبور نمی تواند خالی باشد.")
      .matches(
        /^(?=.*[a-z])/,
        "رمز عبور باید داری حداقل یک حرف کوچک لاتین باشد."
      )
      .matches(
        /^(?=.*[A-Z])/,
        "رمز عبور باید داری حداقل یک حرف بزرگ لاتین باشد."
      )
      .matches(/^(?=.*[0-9])/, "رمز عبور باید دارای حداقل یک عدد باشد")
      .min(8, "رمز عبور نمی تواند کمتر از 8 کاراکتر باشد.")
      .max(64, "رمز عبور نمی تواند بیشتر از 64 کاراکتر باشد."),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "تایید رمز عبور با رمز عبور برابر نیست."
      )
      .required("تایید رمز عبور نمی تواند خالی باشد."),

    firstName: yup
      .string()
      .min(3, "نام نمی تواند کمتر از سه حرف باشد.")
      .required("نام نمی تواند خالی باشد."),
    lastName: yup
      .string()
      .min(3, "نام خانوادگی نمی تواند کمتر از سه حرف باشد.")
      .required("نام خانوادگی نمی تواند خالی باشد."),

    phone: yup
      .string()
      .matches(/^[0-9]/, "لطفا شماره همراه خود را به صورت صحیح وارد کنید.")
      .min(11, "لطفا شماره همراه خود را به صورت کامل کنید.")
      .max(11, "لطفا شماره همراه خود را به صورت کامل کنید.")
      .required("لطفا شماره همراه خود را به صورت کامل و صحیح وارد کنید."),
    terms: yup
      .boolean()
      .oneOf(
        [true],
        "لطفا موافقت با شرایط و استفاده از خدمات را تایید نمایید."
      ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <section className={` container ${style.signUp}`}>
      <div className={style.title}>
        <h4>عضویت</h4>
        <p>لطفا برای عضویت اطلاعات این فرم را تکمیل کنید.</p>
      </div>

      <form onSubmit={formik.handleSubmit} noValidate>
        <div className={`${style.nameBox} ${style.formControl}`}>
          <Input
            name="firstName"
            formik={formik}
            label="نام"
            props={{ placeholder: "سهیل" }}
          />
          <Input
            name="lastName"
            formik={formik}
            label="نام خانوادگی"
            props={{ placeholder: "جعفرنژاد" }}
          />
        </div>

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
            label="تلفن همراه"
            name="phone"
            type="tel"
            formik={formik}
            props={{ minLength: 11, maxLength: 11, placeholder: "شماره همراه" }}
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

        <div className={style.formControl}>
          <Input
            label="تایید کلمه عبور"
            name="passwordConfirm"
            type="password"
            formik={formik}
            props={{
              minLength: 3,
              maxLength: 64,
              placeholder: "تایید کلمه عبور",
            }}
          />
        </div>

        <div className={`${style.formControl} ${style.terms}`}>
          <TermsBox
            formik={formik}
            name="terms"
            label="موافقت با شرایط و استفاده از خدمات"
          />
        </div>

        <div className={style.footer}>
          <button className={style.submit} type="submit">
            تکمیل ثبت نام
          </button>

          <Link to="/login">حساب کاربری دارید؟ ورود </Link>
        </div>
      </form>
    </section>
  );
};

export default Signup;
