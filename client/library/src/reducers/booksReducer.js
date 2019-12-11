import * as types from '../actions/actionTypes';


const initialState = {
    bookList: {
        allBooks: [],
        loading: false,
        error: null
    }
}

export const booksReducer = (state = initialState, action)=> {
    let error;
    switch (action.type) {
        case (types.FETCH_BOOKS):
            return {
                ...state,
                bookList: {
                    allBooks: [],
                    error: null,
                    loading: true
                }
            }

        case (types.FETCH_BOOKS_SUCCESS):
            return {
                ...state,
                bookList: {
                    allBooks: action.payload,
                    error: null,
                    loading: false
                }
            }

        case (types.FETCH_SINGLE_BOOK_FAILURE):
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                bookList: {
                    allBooks: [],
                    error: error,
                    loading: false
                }
            }
    
        default:
            return state;
    }
}