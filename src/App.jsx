import React from "react";
import Menu from "./components/MenuItem/MenuItem";
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from './pages/Order';
import Form from './components/Form'


// function AppWrapper() {
// 	const location = useLocation();
// 	const isFormPage = location.pathname === "/form";
  
// 	return (
// 	  <>
		
// 		{!isFormPage && (
// 		  <NavLink to="/form">Go to Form</NavLink>
// 		)}
		
// 		<Routes>
		  
// 		</Routes>
// 	  </>
// 	);
//   }

function App() {
  return (
    <>
	<HashRouter>
		<Routes>
			<Route path="/form" element={<Form></Form>}></Route>
			<Route path="/menu" element={<Menu></Menu>}></Route>
			<Route path="/" element={<Home></Home>}></Route>
			<Route path="/order" element={<Order></Order>}></Route>
		</Routes>

	</HashRouter>

      
    </>
  );
}

export default App;
