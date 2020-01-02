import * as types from "../actions/actionTypes";

const initialState = {
    categoriesList: {
        allCategories: [],
        loading: false,
        error: null,
    }
}

export const categoriesReducer = (state = initialState, action) => {
    let error;
    switch (key) {
        case (types.FETCH_CATEGORIES):
            return {
                ...state,
                categoriesList: {
                    allCategories: [],
                    error: null,
                    loading: true,
                }
            }

        case (types.FETCH_CATEGORIES_SUCCESS): 
            return {
                ...state,
                categoriesList: {
                    allCategories: action.payload,
                    loading: false,
                    error: null
                }
            }

        case (types.FETCH_CATEGORIES_FAILURE):
            error = action.payload || { message: action.payload.message }
            return {
                ...state,
                categoriesList: {
                    allCategories: [],
                    loading: false,
                    errro: error
                }
            }
    
        default:
            return state;
    }
}