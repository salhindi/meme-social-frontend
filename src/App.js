import React, { Component } from 'react';
import MemesContainer from './containers/MemesContainer';
import NavBar from './components/NavBar';
import './App.css';
import Footer from './components/Footer';



class App extends Component {
 render() {
    return (
      <div className="container">
        <h2>MEME SOCIAL</h2>
        <NavBar />
        <MemesContainer />
        <Footer />
      </div>
    );
  }
}





export default App;

