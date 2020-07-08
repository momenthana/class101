import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './views/Header';
import Home from './views/Home';
import Products from './views/Products';
import Cart from './views/Cart';
import NotFound from './views/NotFound';

import items from './data/productItems'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.SelectChange = this.SelectChange.bind(this);
    this.SelectDelete = this.SelectDelete.bind(this);
    this.state = {
      items: items,
      select: []
    }
  }

  SelectChange(select) {
    let selected = this.state.select
    if(selected.length === 3) {
      alert('장바구니에는 최대 3개의 상품을 담을 수 있습니다!')
    } else {
      selected.push(select)
      this.setState({ select: selected });
    }
  }

  SelectDelete(select) {
    let selected = this.state.select
    let search = selected.indexOf(select);
    selected.splice(search, 1);
    this.setState({ select: selected });
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/products">
              <Header />
              <Products state={this.state} SelectChange={this.SelectChange} SelectDelete={this.SelectDelete} />
            </Route>
            <Route path="/cart">
              <Header cart />
              <Cart state={this.state} SelectChange={this.SelectChange} SelectDelete={this.SelectDelete} />
            </Route>
            <NotFound />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
