import React from 'react';
import {connect} from 'react-redux';
import { fetchMemes } from './actions/fetchMemes';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchMemes({type: 'FETCH_MEMES', payload: {name: 'Checking'}}) 
  }



  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(null, {fetchMemes})(App);

