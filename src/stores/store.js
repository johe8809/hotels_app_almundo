import { createStore, applyMiddleware  } from 'redux';
import getRootReducer from '../reducers';
import thunk from 'redux-thunk'

export default function getStore(reducer) {
    return store = createStore(getRootReducer(reducer), undefined, applyMiddleware(thunk));
}