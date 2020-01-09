import React, { Fragment} from 'react'
import SingleBook from './SingleBook';


const BookList = props => {
        return (
            <Fragment>
                <div className="main-container">
                <section className="books-title">
                    <h1>All Books</h1>
                </section>

                <section className="books-container">
                    {
                        props.books.map(book => {
                            return <SingleBook
                                image = {book.image_url}
                                title = {book.title}
                                author = {book.author_name}
                                key = {book.book_id}
                            />
                        })
                    }
                </section>
                </div>
            </Fragment>
        )
}

export default BookList;
