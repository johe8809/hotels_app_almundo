import { createStore } from 'redux';
import getRootReducer from '../reducers';

export default function getStore(reducer) {
    return store = createStore(getRootReducer(reducer));
}