import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR } from '../constants';
import getDataHotels from '../api/api';


export const getData = () => {
    return {
        type: FETCHING_DATA
    }
}

export const getDataSuccess = data => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export const getDataError = (error) => {
    return {
        type: FETCHING_DATA_ERROR,
        error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(getData());
        getDataHotels()
            .then(([response, json]) => {
                dispatch(getDataSuccess(json));
            })
            .catch((error) => dispatch(getDataError(error)));
    }
}



