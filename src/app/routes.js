import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import App from './App.jsx'
import Inicial from './pages/inicial.jsx';

function AppRoutes(){
    
  return(
    <Router>
      <Routes>
        <Route path={`/`} element={<Inicial/>} />
        <Route path={`/login`} element={<App/>} />
     </Routes>
  </Router>
  )

}
export default AppRoutes

