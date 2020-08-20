import * as actionTypes from './actionTypes';




let nameData = []

export function addMovieName(name) {
    nameData.push(name)
    return {
        type: actionTypes.ADDFILM,
        payload: [nameData]
    }

}


export function sendName(name) {

    return function (dispatch) {

        dispatch(addMovieName(name))
    }

}