import { Provider } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import store from "../redux/store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </Provider>
  );
};

export default Layout;
