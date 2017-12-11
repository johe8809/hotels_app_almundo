import { combineReducers } from 'redux';

export default function getRootReducer(reducer) {
    return combineReducers({
        nav: reducer
    })
}