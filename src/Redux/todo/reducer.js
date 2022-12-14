import { ActionTypes } from '../types';

const INITIAL_STATE = {
    result: []
};

const todoReducer = (state = [], action) => {
    console.log('todoreducer', action.allData);
    let copyState = [...state];
    switch (action.type) {
        case ActionTypes.AddData:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                }
            ]
        case ActionTypes.DeleteData:
            copyState.splice(action.index, 1)
            return copyState;
        case ActionTypes.EditItem:
            const index = state.findIndex(obj => obj.id === action.id);
            return [
                ...state.slice(0, index),
                {
                    id: action.index,
                    text: action.index,
                }

            ]
        default:
            return state;
    }
};
export default todoReducer;