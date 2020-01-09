import React from 'react';
import './styles/App.css';
import Home from './container/Home';
import Aside from './component/Aside';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
    <Aside />
    <main>
    <Header />
     <Home />
    </main>
    </div>
  );
}

export default App;
