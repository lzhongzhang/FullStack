import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    }

    render() { 
        const { input } = this.state;
        return (
            <div className="AddTodo">
                <input value={input} onChange={e => {
                    this.setState({ input: e.target.value });
                }} />
                <button onClick={() => {
                    this.props.addTodo(input);
                    this.setState({ input: "" });
                }}>Add New</button>
            </div>
        );
    }
}

export default AddTodo;