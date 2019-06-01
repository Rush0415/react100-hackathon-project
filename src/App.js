import React, { Component } from "react";
import "./App.css";
const axios = require("axios");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomjoke: "",
      punch: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.getJokes = this.getJokes.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit() {
    this.getJokes();

  }

  getJokes() {
    const reqURL1 = "https://official-joke-api.appspot.com/random_joke";
    axios.get(reqURL1).then(res => {
      this.setState({
        randomjoke: res.data.setup,
        punch: res.data.punchline
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hackathon Random App</h1>
          <p className="App-intro">Get Random Jokes and Funny Memes Images</p>
          <button id="getjoke" className="btn btn-primary" onClick={this.submit}>Click Here</button>
        </header>

        <div className="body container-fluid" id="form1">
          <div className="container">
            <div className="output">
              <div className="row">
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading" id="header">Random Joke Result</div>
                    <div className="panel-body">
                      <div
                        id="randomjoke"
                        className="container-fluid"
                        onChange={this.handleChange}
                      >
                        {this.state.randomjoke}
                      </div>
                      <div
                        id="punchline"
                        className="container-fluid"
                        onChange={this.handleChange}
                      >
                        {this.state.punch}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
