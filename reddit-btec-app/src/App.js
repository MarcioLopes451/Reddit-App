import './App.css';
import { SearchBar } from './Components/SearchBar/SearchBar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
   <>
   <nav>
    <SearchBar />
   </nav>
   </>
  )
}

export default App;
