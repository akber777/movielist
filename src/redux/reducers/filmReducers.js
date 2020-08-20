import * as actionTypes from '../actions/actionTypes';

import initialState from './initialState';

export default function filmReducers(state = initialState.currentFilm.film, action) {

    switch (action.type) {
        case actionTypes.ADDFILM:
            return action.payload;
            
        case actionTypes.DELETEFILM:
            return action.payload;

        default:
            return state;
    }


}