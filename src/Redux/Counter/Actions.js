import { ActionTypes } from "../types";
export const increaseCounter = (data) => {
    return {
        type: ActionTypes.INCREMENT,
        data: data
    }
}
export const decreseCounter = (data) => {
    return {
        type: ActionTypes.DECREMENT,
        data: data
    }
}
let nextTodoId = 0
export const addTodo = text => ({
    type: ActionTypes.AddData,
    id: nextTodoId++,
    text
})
export const DeleteItem = (index) => {
    return {
        type: ActionTypes.DeleteData,
        index: index
    }
};
export const editItem = (text, updateId, getdata) => {
    console.log('action update', getdata);
    return {
        type: ActionTypes.EditItem,
        index: text,
        id: updateId,
        allData: getdata,

    }
};
