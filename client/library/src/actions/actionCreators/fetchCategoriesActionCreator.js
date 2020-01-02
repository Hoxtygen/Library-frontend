import axios from "axios";
import {FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE  } from "../actionTypes";


export function fetch_categories() {
    return {
        type: FETCH_AUTHORS
    }
}

export function fetch_categories_success(authors) {
    return {
        type: FETCH_AUTHORS_SUCCESS,
        payload: authors
    }
}

export function fetch_categories_failure(error) {
    return {
        type: FETCH_AUTHORS_FAILURE,
        payload: error
    }
}


export const fetchAuthors = () => dispatch =>  {
        dispatch(fetch_categories());
        axios.get('https://hoxtygen-library.herokuapp.com/api/v1/categories')
            .then(res => {
                dispatch(fetch_categories_success(res.data))
            })
            .catch(error => {
                dispatch(fetch_categories_failure(error.message))
            });
}