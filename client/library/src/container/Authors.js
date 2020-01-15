import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../actions/actionCreators/fetchAuthorsActionCreator";
import Loaders from "../component/Loader";

export default function Authors() {
    const authors = useSelector(state => state.authorsReducer.authorsList);
    const dispatch = useDispatch();
    const storeAuthors = authors.allAuthors.data || [];

    useEffect(() => {
        dispatch(fetchAuthors())
    }, [dispatch]);

    if (authors.loading) {
        return <Loaders />
    }
    return authors.error ? (<p>{authors.error}</p>) : (
        <Fragment>
            <ul>
                {
                    storeAuthors.map(author => (
                        <li key = {author.author_id}>{author.author_name}</li>
                    ))
                }
            </ul>
        </Fragment>
    )
}

