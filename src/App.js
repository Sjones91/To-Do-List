import React, { useState } from 'react';
import './App.scss';
import Header from './components/header.js';
import MainContent from './components/mainContent';
function App() {
  return (
    <main>
      <Header/>
      <MainContent className=""/>
    </main>

  );
}

export default App;
