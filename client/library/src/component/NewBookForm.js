import React from 'react'

export default function NewBookForm() {
    return (
        <div className = "form-container">
            <form action="">
                <label htmlFor="title">Title</label>
                <input id = "title" type="text"/>
                <label htmlFor="author">Author</label>
                <input id = "author" type="text"/>
                <label htmlFor="categories">Categories</label>
                <input id = "" type="text"/>
                <label htmlFor="image">Image</label>
                <input id = "" type="file"/>
                <label htmlFor="excerpt">Excerpt: </label>
                <textarea name="" id="excerpt" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}
