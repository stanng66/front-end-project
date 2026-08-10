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
// Project Requirement: component 1: show fetched JSONdata
import './bookDetails.css';
import { useEffect, useState } from "react";

export default function BookDetails() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  // Your web application should perform some processing on the received data and display the results (FETCH call)
  useEffect(() => {
    fetch(`https://api.bigbookapi.com/search-books?query=a&number=24&api-key=73f838a7148744149b5199c9bd46e28e`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to retrieve book data");
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBooks(data.books);
        setError("");
      })
    .catch(err => setError(err.message));
  }, []);

  return (
    <>
      <center><h2>All Available Books</h2></center>

      <p style={{ color: "red" }}>{error}</p>

      <div className="book-details-container">
        {books.slice(0, visibleCount).map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>   {/* Book title */}

            {book.image && (  // book image
              <img
                src={book.image}
                alt={book.title}
                style={{ width: "150px", borderRadius: "8px" }}
              />
            )}

            {book.authors && (   // book authors
              <p>
                <strong>Author:</strong>{" "} 
                {Array.isArray(book.authors) 
                  ? book.authors.map(author => author.name || author).join(",")
                  : book.authors?.name || "Unknown Author"}
              </p>
            )}

            {book.rating && (   // book rating
              <p>
                <strong>Rating:</strong>{" "}
                {(book.rating?.average * 10).toFixed(2) || "No rating available"}
              </p>
            )}
          </div>
        ))}
      </div>

      {visibleCount < books.length && (
        <button onClick={() => setVisibleCount(prev => prev + 10)}
        style={{
            margin: "20px auto",
            display: "block",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#d81b60",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        > Show More</button>
      )}
    </>
  );
}
