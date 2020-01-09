import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import CategoryList from "../component/CategoryList";
import { fetchCategories } from "../actions/actionCreators/fetchCategoriesActionCreator";
import Loaders from '../component/Loader';

const Categories = () => {
    const categories = useSelector(state => state.categoriesReducer.categoriesList) || [];
    const dispatch = useDispatch();
    const bookCategories = categories.allCategories.data || [];

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    if (categories.loading) {
        return <Loaders />
    }
    return categories.error ? (<p>{categories.error}</p>) : (
        <Fragment>
        <ul>
            <li>
            <CategoryList categories = { bookCategories } />
            </li>
        </ul>
        </Fragment>
    );
    
}

export default Categories;