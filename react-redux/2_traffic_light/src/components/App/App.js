import React from 'react';
import './App.css';
import connect from 'react-redux';

class App extends React.Component {

  render() {
    const { go, caution, stop } = this.props;
    return (
      <div>
        <div>

        </div>
        <div>
          <button onClick={() => go()}></button>
          <button onClick={() => caution()}></button>
          <button onClick={() => stop()}></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
  return {
    go: () => {
      dispatch(handleGo());
    },
    caution: () => {
      dispatch(handleCaution());
    },
    stop: () => {
      dispatch(handleStop());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
