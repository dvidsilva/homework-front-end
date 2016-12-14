import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Github from './github';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    loading: true,
    repos: [],
  }
} 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>David Silva's Repos</h2>
        </div>
        <div className="results">
          {this.renderResults()}
        </div>
      </div>
    );
  }

  renderResults = () => {   
    const results = this.state.repos.map((result, idx) =>
      <div className="repo">
        {result.name}
      </div>
    );
    return this.state.loading ? <div>Loading...</div> : results;
  }

  componentDidMount() {

    Github.get(`dvidsilva`).then(data => {
      console.log(data);
      this.setState({loading: false});
      this.setState({repos: data});
    });
  }

}

export default App;
