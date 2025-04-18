import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ReceiptPage from "./pages/ReceiptPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ReceiptPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App
