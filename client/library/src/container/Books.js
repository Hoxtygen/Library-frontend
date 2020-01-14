import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import BookList from '../component/BookList'
import { fetchBooks } from '../actions/actionCreators/fetchBooksActionCreator';
import Loaders from '../component/Loader';


const Books = () => {
    const books = useSelector(state => state.booksReducer.bookList) || [];
    const dispatch = useDispatch();
    const storedBooks = books.allBooks.data || [];

    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch]);

    if (books.loading) {
        return <Loaders />
    }

    return books.error ? (<p>{books.error}</p>) : (
        <Fragment>
            <BookList books = {storedBooks} />
        </Fragment>
    )
}

export default Books;
