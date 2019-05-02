import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      input:""};
    this.inputRef=React.createRef();
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  componentDidUpdate() {
    this.inputRef.current.focus();
  }

  handleInput = e => {
    this.setState({input: e.target.value});
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      const {lists, input} = this.state;
      // no blank
      // let email = input.trim();
      // if (/^[a-zA-Z0-9]{4,12}@[a-zA-Z0-9]{2,5}.com$/.test(email)) {
      this.setState({lists: [...new Set(lists).add(input)], input: ""});
      // }
    }
  };

  handleDelete = sth => {
    this.setState({ lists: this.state.lists.filter((ele) => ele !== sth)});
  };

  render() {
    const {lists, input} = this.state;
    return (
        <div className="container">
          {lists.map((ele, index) => {
            return (<div className="list-tile" key = {index}>
              {ele}
              <button onClick={() => this.handleDelete(ele)}>x</button>
            </div>);
          })}
          <input ref={this.inputRef} className="input" placeholder="add a tag..." onChange={this.handleInput} value={input} onKeyPress={this.handleKeyPress}/>
        </div>
    );
  }
}

export default App;
