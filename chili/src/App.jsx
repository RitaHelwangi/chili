import Form from './components/Form'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
	<HashRouter>
	<Routes>
	  
	  <Route path="/form" element={<Form />} />
	</Routes>
  </HashRouter>
  )
}

export default App
