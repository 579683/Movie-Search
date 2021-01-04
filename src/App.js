import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home';
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail';
import ActorDetail from './pages/ActorDetail'
import BrowseMovie from './pages/BrowseMovie';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

function App() {

  return (
      <Router basename="/">
        <div className="App">
          <Header />
          <div className="App-body">

            {/* I use normal routing here */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/top_rated">
              <BrowseMovie type="top_rated" />
            </Route>
            <Route path="/popular">
              <BrowseMovie type="popular" />
            </Route>
            <Route exact path="/search">
              <BrowseMovie type="search" />
            </Route>

            {/* I use switch for nested routes, so those components will be rendered inclusively and it will be helpful for nested URLs */}
            <Switch>
              <Route path="/movies/:movieSlug" component={MovieDetail}>
              </Route>
              <Route path="/people/:castSlug" component={ActorDetail}>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;