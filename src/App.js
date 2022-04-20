import "./App.css";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignUpPage/SignUp";
import CartPage from "./pages/CartPage";
import InCartPage from "./pages/InCartPage/InCartPage";
import NextCartPage from "./pages/NextCartPage/NextCartPage";
import CartDetail from "./pages/CartDetailPage/CartDetail";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Navigate to="/cart/in" />} />
            <Route path="/cart" element={<CartPage />}>
              <Route path="next" element={<NextCartPage />} />
              <Route path="in" element={<InCartPage />} />
            </Route>
            <Route path="/:id" element={<CartDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </section>
  );
}

export default App;
