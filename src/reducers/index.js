import { combineReducers } from 'redux';
import hotelsReducer from './hotelsReducer';

export default function getRootReducer(reducer) {
    return combineReducers({
        nav: reducer,
        dataHotels: hotelsReducer
    })
}