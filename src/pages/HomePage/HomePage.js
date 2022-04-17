import style from "./HomePage.module.css";
import ProductList from "../../components/ProductList/ProductList";
import FilterCom from "../../components/Filter/Filter";
const HomePage = () => {
  return (
    <section className={style.container}>
      <FilterCom />

      <ProductList />
    </section>
  );
};

export default HomePage;
