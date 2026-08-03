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
// Project Requirement: optional/additional components
import './bookDetails.css';
import { useEffect, useState } from "react";

export default function BookDetails() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
      fetch(`https://api.bigbookapi.com/search-books?query=a&number=10&api-key=73f838a7148744149b5199c9bd46e28e`)
        .then(res => {
          if (!res.ok) throw new Error("Failed to retrieve book data");
          return res.json();
        })
        .then(data => {
          setBooks(data.books);
          setError("");
        })
        .catch(err => setError(err.message));
    }, []);

    return (
        <>
            <h2>All Available Books</h2>

            <p style={{ color: "red" }}>{error}</p>

            {books.map((group, index) => (
                <div key={index}>
                  {group.map((book) => (
                    <div key={book.id} style={{ marginBottom: "20px" }}>
                      <h3>{book.title}</h3>

                      {book.image && (
                        <img
                          src={book.image}
                          alt={book.title}
                          style={{ width: "150px", borderRadius: "8px" }}
                        />
                        )}

                        {book.description && (
                          <p><strong>Description:</strong> {book.description}</p>
                        )}

                        {book.authors && (
                          <p><strong>Author:</strong> {book.authors.join(", ")}</p>
                        )}
                    </div>
                   ))}
                </div>
            ))}
        </>
    );
}
