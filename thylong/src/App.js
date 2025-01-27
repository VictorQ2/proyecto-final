import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Events from './Pages/events';
import AnnualReport from './Pages/annual';


import SignUp from './Pages/signup';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>
  );
}
  
export default App;