import axios from "axios";
import { FETCH_AUTHORS, FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_FAILURE } from "../actionTypes";

export function fetch_authors() {
    return {
        type: FETCH_AUTHORS
    }
}

export function fetch_authors_success(authors) {
    return {
        type: FETCH_AUTHORS_SUCCESS,
        payload: authors
    }
}

export function fetch_authors_failure(error) {
    return {
        type: FETCH_AUTHORS_FAILURE,
        payload: error
    }
}


export const fetchAuthors = () => dispatch =>  {
        dispatch(fetch_authors());
        axios.get('https://hoxtygen-library.herokuapp.com/api/v1/authors')
            .then(res => {
                dispatch(fetch_authors_success(res.data))
            })
            .catch(error => {
                dispatch(fetch_authors_failure(error.message))
            });
}