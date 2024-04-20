import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './Page1/Cards';
import NavigationBaar from './Components/NavigationBaar';
import Cards2 from './Page2/Cards2';


function App() {
  return (
    <Router>
      <div>
      <NavigationBaar/>
        <Routes>
          <Route exact path="/" element={<Cards/>} />
          <Route path="/pages" component={<Cards/>} />
          <Route path="/Cards2" element={<Cards2/>} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
