import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index';
import Events from './pages/Events';
import AnnualReport from './pages/Annual';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/index' exact component={Home} />
        <Route path='/events' component={Events} />
        <Route path='/AnnualReport' component={AnnualReport} />
      </Routes>
    </Router>
  );
}
  
export default App;