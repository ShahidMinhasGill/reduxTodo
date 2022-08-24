import { createStore } from 'redux'
import rootReducer from './rootReducer';


const configureStore = () => {
    return createStore(rootReducer);
}

const store = configureStore();

export default store;