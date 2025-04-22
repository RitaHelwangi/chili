import React from "react";
import Menu from "./pages/Menu";
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header.jsx"
import WelcomeSection from "./components/WelcomeSection.jsx"
import Footer from "./components/Footer.jsx";
import Order from './pages/Order';
import Form from './components/Form'
import AddPizzaForm from "./components/Addpizzaitem";


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
	<AddPizzaForm/>



	<Header />

	<HashRouter>
		<Routes>
			<Route path="/form" element={<Form></Form>}></Route>
			<Route path="/menu" element={<Menu></Menu>}></Route>
			<Route path="/" element={<Home></Home>}></Route>
			<Route path="/order" element={<Order></Order>}></Route>
		</Routes>

	</HashRouter>
	
	<Footer />

      
    </>
  );
}

export default App;
