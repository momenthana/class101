import React, { Component } from 'react';
import { Card } from '../components'

class Products extends Component {
  render() {
    return (
      <Card img='https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729'
        title='포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스'
        price='560000'
      />
    );
  }
}

export default Products;
