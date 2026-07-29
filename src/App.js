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
import './App.css';
import Project from './project'            // Component 3
import BookSearch from './BookSearch';     // Component 1 and 2
import Countries from './countries';       // Component 4
import BookDetails from './bookDetails';   // Additional component

function App() {
  return (
    <div className="App">
      <Project />
      <BookSearch />
      <Countries />
      <BookDetails />
    </div>
  );
}

export default App;
