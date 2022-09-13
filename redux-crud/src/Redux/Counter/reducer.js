import { ActionTypes } from '../types';

const INITIAL_STATE = {
    count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
    console.log('reducer', state);

    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state, count: state.count + 1,

            };

        case ActionTypes.DECREMENT:
            return {
                ...state, count: state.count - 1,
            };

        default: return state;
    }

};
export default reducer;