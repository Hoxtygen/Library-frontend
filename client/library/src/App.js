import React from 'react';
import logo from './logo.svg';
import './App.css';
import Context from './context/Contex'
import HomePage from './views/HomePage';

function App() {
  const user = {
    name: 'McDowell',
    age: '54',
    loggedIn: true
  }
  return (
    <Context.Provider value = {user}>
    <div className="App">
     <HomePage />
    </div>
    </Context.Provider>
  );
}

export default App;
