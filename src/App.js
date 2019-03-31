import React, { Component } from 'react';
import './App.css';

import TextField from '@material-ui/core/TextField';

class App extends Component {
  state = {
    ipfsHash: 'QmVDyxZK2zNnMJuxx5QsCLca7t4H8Y5t6GKaynLNn2r1sq'
  }

  handleOnChange = event => {
    this.setState({ ipfsHash: event.target.value})
  };

  render() {
    return (
      <div className="App">
        <TextField
            id="standard-dense"
            label="IPFS Hash"
            onChange={this.handleOnChange}
          />
          <iframe 
            src={`http://localhost:8080/ipfs/${this.state.ipfsHash}`}
          />
      </div>
    );
  }
}

export default App;
