import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import BookList from '../component/BookList'
import { fetchBooks } from '../actions/actionCreators/fetchBooksActionCreator';

class Home extends Component {
    componentDidMount() {
        this.props.fetchBooks()
    }
    render() {
        const books = this.props.allBooks.data || [];
        console.log(books);
        if (this.props.loading) {
            return <h1>Loading</h1>
        }
        return this.props.error ? (<p>{this.props.error}</p>) :
        (
            <Fragment>
                <BookList books = {books} />
            </Fragment>
        )
    }
}



function mapStateToProps(state){
   return {
    allBooks: state.booksReducer.bookList.allBooks,
    loading: state.booksReducer.bookList.loading,
    error: state.booksReducer.bookList.loading
   }
}


export default connect(mapStateToProps, { fetchBooks })(Home)
