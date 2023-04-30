import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchResult from './SearchResult';

{/* "updateShelf" is a function to update the shelf of a book, 
"books" is an array of books that the user has already added to their shelf. */}
const Search = ({ updateShelf, books }) => {

  {/* "query": user's search query, "searchBooks": an array of books that match the user's search query, 
   "emptyQuery": a boolean that is true if the search query is empty.*/}
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState ([]);
  const [emptyQuery, setEmptyQuery] = useState (false);

  {/* The handleSearch function sets the "searchBooks" state to the results 
  and sets "emptyQuery" to true, if the user's search query matches with the BookAPI query.*/}
  const handleSearch = async (event) => {
    const query = event.target.value;
    setQuery(query);

    const res = await BooksAPI.search(query);

    if (res && !res.error) {
      setSearchBooks(res);
      setEmptyQuery(true);
    } else {
      setSearchBooks([]);
      setEmptyQuery(false);
    }
  }

  // Check if the found book is already in the "books" array and set the book state.
  const updateSearchBooks = searchBooks.map((inquery)=> {
    const bookFound = books.find((book) => book.id === inquery.id )
    if (bookFound) {
      inquery.shelf = bookFound.shelf;
    } else {
      inquery.shelf = 'none';
    }
    return inquery;
  })

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to = "/" className='close-search'>
        Close
        </Link>
        <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN" value={query} onChange={handleSearch}
              />
            </div>
          </div>
         {/* The "SearchResult" component is rendered with the search results, 
         along with the "updateShelf" function and the "updateSearchBooks" function.*/}
          <SearchResult query={query} searchBooks={searchBooks} updateShelf={updateShelf} emptyQuery={emptyQuery} updateSearchBooks={updateSearchBooks} />
        </div>
    )
}
// Type checking a Component's Props with PropTypes.
Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}
export default Search;