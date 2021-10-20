import React, {Component} from 'react';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/memes', {
      method: 'GET'
  })
  .then(response => response.json())
  .then(data => console.log(data))
  }
  

  render() {
  return (
    <div className="App">
      <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.min.js'></script>
    
    </div>
  );
  }
}

export default App;
