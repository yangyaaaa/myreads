import { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import * as BooksAPI from "./components/BooksAPI";
import Search from "./components/Search";


function App () {
    
     const [books, setBooks] = useState([]);
    {/* useEffect hook fetch all the books data from the 
      server-side API using the BooksAPI.getAll() method 
    when the component mounts for the first time.  */}
     useEffect(() => {
      const getBooks = async () => {
        const res = await BooksAPI.getAll();
        setBooks(res); //update the 'book' state
      };

      getBooks();
     }, []);

     {/*The updateShelf() function is used to update the shelf of a book, 
      and it takes two arguments: book and shelf. */}
      const updateShelf = async (book, shelf) => {
        await BooksAPI.update(book, shelf);
        const res = await BooksAPI.getAll();
        setBooks(res);// update the 'books' state variable with the updated shelf value of the book
      }

      // Setup the homepage route and the search page route.
  return (
    <Routes>
      <Route exact path="/" element = {
        <Layout books={books} updateShelf={updateShelf} />}/>
      
      <Route path="/search" element={
          <Search books={books} updateShelf={updateShelf} />}/>
    </Routes>  
  );
}

export default App;