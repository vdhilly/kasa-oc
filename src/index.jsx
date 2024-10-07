import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
