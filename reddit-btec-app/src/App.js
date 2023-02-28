import './App.css';
import { SearchBar } from './Components/SearchBar/SearchBar';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Components/Store';


function App() {
  return (
   <>
   <nav>
    <Provider store={store}>
    <SearchBar />
    </Provider>
   </nav>
   </>
  )
}

export default App;
