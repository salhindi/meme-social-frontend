import React from 'react';
// import { fetchMemes } from './actions/fetchMemes';
import MemeContainer from './containers/MemesContainer';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <NavBar />
        <MemeContainer />
        
      </div>
    );
  }
}

export default (App);

