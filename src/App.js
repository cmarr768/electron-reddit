import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'request';

class App extends Component {
  constructor(props) {
  super(props)
this.setState({reddits:[]});
}
  state = {
    reddits: []
  };
  componentDidMount = () => {
    request.get({
      headers: {
          'content-type': 'application/json',
      },
      url: 'https://www.reddit.com/r/bobanholdingthings.json',
    }, (error, response, body) => {
      if(error) {
        console.log(error);
      }
      else {
        // console.log(JSON.parse(body).data.children);
        this.setState({reddits: JSON.parse(body).data.children});
      }
    });
  }
  //this is a test
  render() {
    return (
      <div className="container">
        <ul className="list-group list-group-flush">
          {this.state.reddits.map(reddit => {
            return <li className="list-group-item d-flex" key={reddit.data.id}>
            <img src={reddit.data.thumbnail} alt="thumbnail" className="thumbnail"></img>
            <div>{reddit.data.title}</div>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
