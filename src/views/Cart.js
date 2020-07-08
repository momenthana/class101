import React, { Component } from 'react';
import { CartCard } from '../components'

class Cart extends Component {
  render() {
    const CardList = this.props.state.select.map(element => {
      return (
        <CartCard
          element={element}
          state={this.props.state}
          SelectChange={this.props.SelectChange}
          SelectDelete={this.props.SelectDelete}
          cart
          check
        />
      )
    });

    return (
      <div>
        {CardList}
      </div>
    );
  }
}

export default Cart;
