import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Form from './components/Form'
import './App.css'


function AppWrapper() {
  const location = useLocation();
  const isFormPage = location.pathname === "/form";

  return (
    <>
      
      {!isFormPage && (
        <NavLink to="/form">Go to Form</NavLink>
      )}
      
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<h1>Start Page</h1>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppWrapper />
    </HashRouter>
  );
}

export default App;
