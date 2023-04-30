import PropTypes from 'prop-types';
import Book from './Books';

{/* 
The "query" prop is a string representing the user's search query. 
The "searchBooks" prop is an array of objects representing the books that match the search query. 
The "updateShelf" prop is a function that will be called when the user moves a book to a different shelf. 
The "emptyQuery" prop is a boolean indicating whether the search query is empty. 
*/}
const SearchResult = ({ query, searchBooks, updateShelf, emptyQuery,
 }) => {
    return (
      <div className='search-books-results'>
        <ol className='books-grid'>
        
          {/* If the "emptyQuery" prop is true, the component maps over the "searchBooks" array to 
          render a list of books using the "Book" component. Otherwise, the component displays a string indicating 
          that there are no results for the search query.*/}

          { emptyQuery ? (
            searchBooks.map((book) =>(
              <Book key={book.id} book={book} updateShelf={updateShelf} />
            ))
          ):(`Sorry, there is no result of ${query}`)
          }
        </ol>
      </div>
    )
  }
  
  // Type checking a Component's Props with PropTypes.
  SearchResult.propTypes = {
    query: PropTypes.string.isRequired,
    searchBooks: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    emptyQuery: PropTypes.bool.isRequired,
  }
export default SearchResult;