import axios from 'axios';
import {FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from '../actionTypes';

export function fetch_books() {
    return {
        type: FETCH_BOOKS
    }
}

export function fetch_books_success(books) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    }
}

export function fetch_books_failure(error) {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}

export const fetchBooks = () => dispatch => {
    dispatch(fetch_books())
    axios.get('https://hoxtygen-library.herokuapp.com/api/v1/books')
        .then(res => {
            dispatch(fetch_books_success(res.data))
        })
        .catch(error => {
            dispatch(fetch_books_failure(error.message))
        })
}