import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Navigation from './components/Navigation';
import TopComponent from './components/TopComponent';
import StoreSelection from './components/StoreSelection';
import StoreSelectionSol from './components/StoreSelectionSol';

// import bootstrap elements
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <TopComponent/>
      <StoreSelection/>
    </div>
  );
}

export default App;
