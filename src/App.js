import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Slideshow from './components/slideshow';
import Header from '../src/components/header';
import MainView from '../src/components/mainView';

function App() {
  return (
      <div className="App">
        <MainView/>
        {/* <Slideshow /> */}
      </div>
  );
}

export default App;

