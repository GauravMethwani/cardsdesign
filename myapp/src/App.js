import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './Page1/Cards';
import NavigationBaar from './Components/NavigationBaar';


function App() {
  return (
    <Router>
      <div>
      <NavigationBaar/>
        <Routes>
          <Route exact path="/" element={<Cards/>} />
          <Route path="/pages" component={<Cards/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
