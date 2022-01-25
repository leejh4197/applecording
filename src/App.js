import React from 'react';
import './App.css';
import Nav from './page/Nav';
import Test from './page/Test';
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Route path='/' exact component={Nav}></Route>
      <Route path='/test' exact component={Test}></Route>
    </>
  );
}

export default App;
