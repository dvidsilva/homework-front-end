import React, { Component } from 'react';
import logo from './logo.svg';
import star from './star.svg';
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
    const results = this.state.repos.map((r, idx) =>
      <div className="repo" key={idx}>
        <p className="name"><strong><a href={r.html_url}>{r.name}</a></strong></p>
        <p className="description">{r.description}</p>
        <div className="watchers">
          <img src={star} className="star" alt="watchers" />
          {r.watchers}
        </div>
      </div>
    );
    return this.state.loading ? <div>Loading...</div> : results;
  }

  componentDidMount() {

    Github.get(`dvidsilva`).then(data => {
      return data.sort((a,b) => b.watchers > a.watchers ? 1 : b.watchers < a.watchers ? -1 : 0);
    }).then(data=> {
      this.setState({
        loading: false,
        repos: data
      });
    });
  }

}

export default App;
