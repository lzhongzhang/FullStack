import React from 'react';
import Modal from './components/modal';

class App extends React.Component {
  render() {
    const content = <p>Woohoom you're reading this text in a modal!</p>;
    return (
      <div>
      <Modal
        buttonText="launch demo modal"
        cancelButtonText="Go Back"
        content={content}
        width={400}
      />
      </div>
    );
  }
}

export default App;
