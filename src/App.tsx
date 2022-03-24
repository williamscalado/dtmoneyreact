import React from 'react';
import { GlobalStyle } from './assets/styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';


function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Dashboard />
     
    </>
  )
}

export default App;
