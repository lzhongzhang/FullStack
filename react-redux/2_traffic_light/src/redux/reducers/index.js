const initialState = {
    color: 'green'
};

const changeColor = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_RED":
            return {
                color: action.color
            };
        case "CHANGE_YELLOW": 
            return {
                color: action.color
            };
        case "CHANGE_GREEN": 
            return {
                color: action.color
            };
        default: 
            return state;
    }
};

export default changeColor;