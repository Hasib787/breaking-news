import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';


function App() {
  return (
    <div className="container">
      <h2>React Bootstrap</h2>
      <Header></Header>
      <News></News>
    </div>
  );
}

export default App;
