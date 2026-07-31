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
import './App.css';
import Project from './project'            // Component 3
import BookSearch from './BookSearch';     // Component 1 and 2
import Countries from './countries';       // Component 4
import BookDetails from './bookDetails';   // Additional component
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
    <div className="Header"> 
      <h1> Final Project </h1>
      <h2> Stanley Nguyen </h2>
    </div>
    
    <BrowserRouter>
      <nav>
        <Link to="/project">Project</Link> {"   "} |
        <Link to="/books">Book Search</Link> {"   "} |
        <Link to="/countries">Countries</Link> {"   "} |
        <Link to="/details">Book Details</Link> {"   "}
      </nav>

      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/books" element={<BookSearch />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/details" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
