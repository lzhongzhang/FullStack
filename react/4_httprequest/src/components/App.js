import React from 'react';
import './App.css';
import List from './List';
import Detail from './Detail';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      detail: {},
      err: null
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users?per_page=100')
        .then(res => {
          console.log(res);
          this.setState({data: res.data, err: null});
        })
        .catch(err => {
          console.log(err);
          this.setState({err: err});
          alert(err);
        });
  }

  getDetail = login => {
    axios.get(`https://api.github.com/users/${login}`)
        .then(res => {
          console.log(res);
          this.setState({detail: res.data, err: null});
        })
        .catch(err => {
          console.log(err);
          this.setState({err: err});
          alert(err);
        });
  };

  render() {
    return (
        <div className="App">
          <List data={this.state.data} getDetail={this.getDetail}/>
          <Detail {...this.state.detail}/>
        </div>
    );
  }
}

export default App;
