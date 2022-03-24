import React from 'react';
import { GlobalStyle } from './assets/styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TableTransasion } from './components/TableTransasion';


function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Dashboard />
      <TableTransasion />
     
    </>
  )
}

export default App;
