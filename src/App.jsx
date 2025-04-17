import React from "react";
import Menu from "./components/MenuItem/MenuItem";
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from './pages/Order';

function App() {
  return (
    <>
	<HashRouter>
		<Routes>
			<Route path="/menu" element={<Menu></Menu>}></Route>
			<Route path="/" element={<Home></Home>}></Route>
			<Route path="/order" element={<Order></Order>}></Route>
		</Routes>

	</HashRouter>

      
    </>
  );
}

export default App;
