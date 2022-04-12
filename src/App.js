import React from "react";
import Layout from "./layout/Layout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <React.Fragment className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
