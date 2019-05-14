import React from 'react';
import './style.css';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        isOpen: false
    };
  }

  openModal = () => {
    this.setState({isOpen: true});
  }

  closeModal = () => {
    this.setState({isOpen: false});
  }

  render() {
    const { buttonText, cancelButtonText, content, width } = this.props;

    const display_context = this.state.isOpen ? "block" : "none";
    const modal_style = {
      display: display_context
    };
    
    const content_style = {
      width: width
    };
    
    return (
        <div>
            <div className="myButton">
                <button className="btn btn-primary" id="openButton" onClick={this.openModal}>{buttonText}</button>
            </div>
  
            <div className="myModal" style={modal_style}>
                <div className="modal_content" style={content_style}>
                    <div className="modal_header">
                        <button type="button" className="close" aria-label="Close" onClick={this.closeModal}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h4>Modal title</h4>
                    </div>
  
                    <div className="modal_body">
                        <p>{content}</p>
                    </div>
  
                    <div className="modal_footer">
                        <button className="btn btn-primary" id="cancelButton" onClick={this.closeModal}>{cancelButtonText}</button>
                    </div>
                </div>
            </div>
  
        </div>
  
      )
    }
  }
  
  export default Modal;
  