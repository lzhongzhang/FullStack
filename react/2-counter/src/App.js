import './App.css';

import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  addOne = () => {
    this.setState({number: this.state.number + 1});
  };
  minusOne = () => {
    this.setState(({number: this.state.number - 1}));
  };

  render() {
    return (
        <div className="container">
          <div className="number"><p>{this.state.number}</p></div>
          <div className="btn">
            <button className="1" onClick={this.addOne}>Increase</button>
            <button className="2" onClick={this.minusOne}>Decrease</button>
          </div>
        </div>
    );
  }
}

export default App;
