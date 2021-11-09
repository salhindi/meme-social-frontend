import React from 'react';
import MemeContainer from './containers/MemesContainer';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    
    return (
      <div className="container">
        <h2>MEME SOCIAL</h2>
        <NavBar />
        <MemeContainer />
        
      </div>
    );
  }
}

export default (App);

