import React from 'react';

const Filter = props => {
    const { filter } = props;
    return (
        <div className="Filter">
            <button 
                onClick={() => {
                    props.setFilter("all");
                }}
                disabled={filter === "all"}>
                All
            </button>
            <button 
                onClick={() => {
                    props.setFilter("active");
                }}
                disabled={filter === "active"}>
                Active
            </button>
            <button 
                onClick={() => {
                    props.setFilter("completed");
                }}
                disabled={filter === "completed"}>
                Completed
            </button>
        </div>
    );
}

export default Filter;