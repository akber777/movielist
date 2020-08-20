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



// delete movie


export function newMovieName(name) {


    nameData.splice(name, 1);

    return {
        type: actionTypes.DELETEFILM,
        payload: [nameData]
    }

}



export function deleteMovie(event) {

    let target = event.target.parentElement.parentElement;

    let index = target.rowIndex;

    return function (dispatch) {

        dispatch(newMovieName(index))
    }

}