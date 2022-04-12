import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <section>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
