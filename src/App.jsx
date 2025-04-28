import React from "react";
import Menu from "./pages/Menu";
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header.jsx"
import WelcomeSection from "./components/WelcomeSection.jsx"
import Footer from "./components/Footer.jsx";
import Order from './pages/Order';
import Form from './components/Form'
import TomSida from './components/TomSida';
import MenuForm from "../src/components/MenuForm.jsx"

function App() {
     
  return (
    <>

	<HashRouter>
		
	<Header />

		<Routes>
			<Route path="/form" element={<Form></Form>}></Route>
			<Route path="/menu" element={<Menu></Menu>}></Route>
			<Route path="/" element={<Home></Home>}></Route>
			<Route path="/order" element={<Order></Order>}></Route>
			<Route path="/empty" element={<TomSida />} />
			<Route path="/editMenu" element={<MenuForm />} />
		</Routes>

	<Footer />
	
	</HashRouter>
	

      
    </>
  );
}

export default App;