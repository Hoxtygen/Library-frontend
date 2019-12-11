import React, { Component } from 'react'

const BookList = props => {
        return (
            <main>
                <section className="books-title">
                    <h1>Books</h1>
                </section>

                <section className="books-container">
                <ul>

                    {
                        props.books.map(book => {
                            return (
                                <li key = {book.book_id}>{book.title}</li>
                            )
                        })
                    }

                </ul>
                </section>
            </main>
        )
}

export default BookList;
