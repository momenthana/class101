import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './views/Header';
import Home from './views/Home';
import Products from './views/Products';
import Cart from './views/Cart';
import NotFound from './views/NotFound';

import items from './data/productItems'

class App extends React.Component {
  state = {
    items: items
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/products"><Products state={this.state}/></Route>
            <Route path="/cart"><Cart /></Route>
            <NotFound />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
