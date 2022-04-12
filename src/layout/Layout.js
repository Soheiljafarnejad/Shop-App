import Container from "../components/context/Container";
import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
