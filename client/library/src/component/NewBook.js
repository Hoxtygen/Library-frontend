import React, { Fragment } from 'react'
import Aside from './Aside';
import { useSelector } from "react-redux";
import useDropdown from "../component/useDropdown";
import Authors from '../container/Authors';

export default function NewBook() {
    const categories = useSelector(state => state.categoriesReducer.categoriesList) || [];
    const bookCategories = categories.allCategories.data || [];
    const filteredCategory = bookCategories.map(item => item.category_name);
    const authors = useSelector(state => state.authorsReducer.authorsList)
    const authorsList = authors.allAuthors.data || [];
    const filteredAuthor = authorsList.map(author => author.author_name)
    // console.log('filteredcateeee', filteredCategory);

    const [author, AuthorDropdown] = useDropdown("Author", "", filteredAuthor);
    const [category, CategoryDropdown] = useDropdown("Categories", "comic", filteredCategory);
    return (
        <Fragment>
        <Aside />
        <main>
        <div className = "form-container">
            <div className="form-header">
                <h1>New Book</h1>
            </div>
            <form action="">
                <label htmlFor="title">Title</label>
                <input 
                    id = "title" 
                    type="text"
                />

                <AuthorDropdown />
                <label htmlFor="publisher">Publisher</label>
                <input type="text" name="" id="publisher"/>
                <label htmlFor="pubyear">Publication Year</label>
                <input type="number" min = "1900" max = "2099" step = "1" name="" id="pubyear"/>
                <CategoryDropdown />
                <label htmlFor="book-cover">Book Cover</label>
                <input id = "book-cover" type="file"/>
               
            </form>
        </div>
        {/* <Authors /> */}
        </main>
        </Fragment>
    )
}
