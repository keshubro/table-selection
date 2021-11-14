import TableComponent from './components/TableComponent';
import { DetailsProvider } from './contexts/DetailsContext';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import DetailsComponent from './components/DetailsComponent';
import { useState } from 'react';

function App() {
  
  return (
      <>
      <Router>
          <DetailsProvider>
            <Routes>
                <Route path="/" element={<TableComponent />} />
                <Route exact path="/details" element={<DetailsComponent />} />
            </Routes>
          </DetailsProvider>
      </Router>
    </>
  );
}

export default App;
