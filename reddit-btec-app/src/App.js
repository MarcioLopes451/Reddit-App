import './App.css';
import { SearchBar } from './Components/SearchBar/SearchBar';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Components/Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';



function App() {
  return (
   <Provider store={store}>
    <Router>
      <div>
      <SearchBar />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
   </Provider>
   
  )
}

export default App;
