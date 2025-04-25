import React from "react";
import Menu from "./pages/Menu";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";
import Footer from "./components/Footer.jsx";
import Order from './pages/Order';
import Form from './components/Form';
import TomSida from './components/TomSida';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/empty" element={<TomSida />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
