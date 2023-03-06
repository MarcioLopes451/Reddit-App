import './App.css';
import { SearchBar } from './Components/SearchBar/SearchBar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth0ProviderWithHistory from './auth0Provider';





function App() {
  return (
    <Auth0ProviderWithHistory>
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
    </Auth0ProviderWithHistory>
  )
}

export default App;
