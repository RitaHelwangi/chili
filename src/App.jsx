import React from "react";
import Menu from "./components/MenuItem/MenuItem";
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
	<HashRouter>
		<Routes>
			<Route path="/menu" element={<Menu></Menu>}></Route>
			<Route path="/" element={<Home></Home>}></Route>
		</Routes>

	</HashRouter>

      
    </>
  );
}

export default App;
