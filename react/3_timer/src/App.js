import './App.css';

import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0, operation: "START"};
  }

  reset = () => {
    this.setState(({number: 0}));
  };
  change = () => {
    if (this.state.operation === "START") {
      this.setState({operation: "STOP"});
      this.timer = setInterval(() => this.setState({
        number: this.state.number + 1
      }), 1000);
    } else {
      this.setState({operation: "START"});
      clearInterval(this.timer);
    }
  };

  render() {
    return (
        <div className="container">
          <div className="number">{this.state.number}</div>
          <div className="btn">
            <button onClick={this.change}>{this.state.operation}</button>
            <button onClick={this.reset}>RESET</button>
          </div>
        </div>
    );
  }
}

export default App;
