import './App.css';
import { SearchBar } from './Components/SearchBar/SearchBar';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Components/Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
   <>
   <nav>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/searchBar'>
          </Route>
        </Switch>
      </Router>
      <SearchBar />
    </Provider>
   </nav>
   </>
  )
}

export default App;
