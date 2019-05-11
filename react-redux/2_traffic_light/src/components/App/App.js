import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  handleRed = () => {
    this.props.dispatch({ type: 'CHANGE_RED', color: 'green'});
  }

  handleGreen = () => {
    this.props.dispatch({ type: 'CHANGE_GREEN', color: 'yellow'});
  }

  handleYellow = () => {
    this.props.dispatch({ type: 'CHANGE_YELLOW', color: 'red'});
  }


  render() {
    const { color } = this.props;
    return (
      <div className='container'>
        <div className='red' style={{background: color === 'red'? 'red' : 'white'}}></div>
        <br></br>
        <div className='yellow' style={{background: color === 'yellow'? color: 'white'}}></div>
        <br></br>
        <div className='green' style={{background: color === 'green'? color: 'white'}}></div>
        <br></br>
        <div className='button'>
          <button className='btn' onClick={this.handleRed} disabled={color !== 'red'}>Go</button>
          <button className='btn' onClick={this.handleGreen} disabled={color !== 'green'}>Caution</button>
          <button className='btn' onClick={this.handleYellow} disabled={color !== 'yellow'}>Stop</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    color: state.color
});

export default connect(mapStateToProps)(App);
