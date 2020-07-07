import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './views/Header';
import Home from './views/Home';
import Products from './views/Products';
import Cart from './views/Cart';
import NotFound from './views/NotFound';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/products"><Products /></Route>
            <Route path="/cart"><Cart /></Route>
            <NotFound />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
