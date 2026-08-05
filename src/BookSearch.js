// ====================
// Project
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// August 17, 2026
// --------------------
// This program demonstrates react, routing, api integration and rendering
// ====================
import './BookSearch.css';
import { useState } from "react";

export default function BookSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  // Project Requirement: component 1 - show fetched JSONdata
  const searchBooks = async () => {
    setError("");

    if (!query.trim()) {
      setError("Please enter a book title.");
      return;
    }

    if (query.length < 2) {
      setError("Search must be at least 2 characters long.");
      return;
    }

    // Project Requirement:	Your web application should perform some processing on the received data and display the result(Your web application should incorporate/handle AJAX OR FETCH call)
    fetch(`https://api.bigbookapi.com/search-books?query=${query}&number=10&api-key=73f838a7148744149b5199c9bd46e28e`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to retrieve book data");
        return res.json();
      })
      .then(data => {
        setBooks(data.books);
        setError("");
      })
    .catch(err => setError(err.message));
  }; // end of fetch 

  return (
      <>
        <h2>Book discovery</h2>

        {/* Project Requirement: component 2 - ask user input data */}
        {/* Project Requirement: Your web application should perform some interaction with the user */}
        <input
          type="text"
          placeholder="Search a book"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={searchBooks}>Search</button>

        <p style={{ color: "red" }}>{error}</p>

        <div className="book-search-container">
          {books.flat().map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>

              {book.image && (
                <img 
                  src={book.image} 
                  alt={book.title} 
                  style={{ width: "150px", borderRadius: "8px" }}
                />
              )}
            </div>
          ))}
        </div>
      </>
    );
}