import * as types from '../actions/actionTypes';

const initialState = {
    authorsList: {
        allAuthors: [],
        loading: false,
        error: null,
        // favoriteAuthors: []
    }
}

export const authorsReducer = (state = initialState, action) => {
    let error;
    switch (action.type) {
        case (types.FETCH_AUTHORS):
            return {
                ...state,
                authorsList: {
                    allAuthors: [],
                    loading: true,
                    error: null
                }
            }
        
        case (types.FETCH_AUTHORS_SUCCESS):
            return {
                ...state,
                authorsList: {
                    allAuthors: action.payload,
                    error: null,
                    loading: false
                }
            }

        case (types.FETCH_AUTHORS_FAILURE):
            error = action.payload || { message: action.payload.message };
            return {
                ...state,
                authorsList: {
                    allAuthors: [],
                    error: error,
                    loading: false
                }
            }
    
        default:
            return state;
    }
}