import React, { Component, Fragment } from 'react';
import { Card, Pagination } from '../components'
import items from '../data/productItems'

class Products extends Component {
  render() {
    return (
      <Fragment>
        <Card img='https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729'
          title='포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스'
          price='560000'
        />
        <Pagination items={items} />
      </Fragment>
    );
  }
}

export default Products;
