import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
