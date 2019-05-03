import * as ActionTypes from '../ActionTypes';

const initialState = {
    num: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TEST_INCREMENT:
            return {
                ...state,
                num: state.num + 1
            };
        case ActionTypes.TEST_DECREMENT:
            return {
                ...state,
                num: state.num - 1
            };
        default: return state;
    }
};
export default reducer;