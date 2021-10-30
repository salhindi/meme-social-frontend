import React from 'react';
// import { fetchMemes } from './actions/fetchMemes';
import MemeContainer from './containers/MemesContainer';

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        App
        <MemeContainer />
        
      </div>
    );
  }
}

export default (App);

