import React from 'react';
import logo from './logo.svg';
import Aux from './hoc/Aux/Aux';
import Layout from './Components/Layout/Layout';
import styles from './App.module.css';
import Welcome from './Components/Welcome/Welcome';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/mylist">
      <div className={styles.Main}>
        <Welcome />
      </div>
    </HashRouter>
  );
}

export default App;
