// ====================
// Project
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// August 17, 2026
// --------------------
// This program demonstrates 
// ====================
import { useState } from "react";

export default function BookSearch() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    // Priject Requirement: component 1 - show fetched JSONdata
    const searchBooks = async () => {
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
          <input> 
          type="text" 
          placeholder="Search a book"
          value={query}
          onCharge={(e) => setQuery(e.target.value)}
          </input>

          <button onClick={searchBooks}>Search</button>

          {books.map((group, index) => (
            <div key={index}>
                {group.map((book) => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        {book.image && <img src={book.image} alt={book.title} />}
                    </div>
                ))}
            </div>
          ))}
        </>
    );
}

export default BookSearch;