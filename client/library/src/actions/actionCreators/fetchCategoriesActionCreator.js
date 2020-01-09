import axios from "axios";
import {FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE  } from "../actionTypes";


export function fetch_categories() {
    return {
        type: FETCH_CATEGORIES
    }
}

export function fetch_categories_success(categories) {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export function fetch_categories_failure(error) {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}


export const fetchCategories = () => dispatch =>  {
        dispatch(fetch_categories());
        axios.get('https://hoxtygen-library.herokuapp.com/api/v1/categories')
            .then(res => {
                console.log(res.data);
                dispatch(fetch_categories_success(res.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(fetch_categories_failure(error.message))
            });
}