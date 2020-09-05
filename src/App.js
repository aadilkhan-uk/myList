import React from 'react';
import logo from './logo.svg';
import Aux from './hoc/Aux/Aux';
import Layout from './Components/Layout/Layout';
import styles from './App.module.css';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/mylist" >
      <div className={styles.Main}>
        <Welcome />
      </div>
    </ BrowserRouter>
  );
}

export default App;
