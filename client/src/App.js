import React from 'react';
// import "./styles/App.scss";

import './styles/App.scss'

import Header from './components/Header/Header'
import Materials from './components/Materials/Materials'
// import UserProfile from './components/UserProfile/UserProfile'
import './styles/App.scss';


function App() {
  return (
    <div className="App">
      <div className="page-title"> 
        <span className="font-one"> RE </span> 
        <span className="font-two">CYCLO</span> 
        <span className="star-character"> *</span>
      </div>
    <Header />
    <Materials />
    </div>
  );
}

export default App;
