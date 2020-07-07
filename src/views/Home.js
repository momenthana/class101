import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  margin: 10vh auto;
  display: block;
  width: 150px;
  height: 150px;
  background: ${props => props.light ? 'white' : '#9146ff'};
  color: ${props => props.light ? '#9146ff' : 'white'};
  border: 1.5px solid #9146ff;
  font-size: 25px;
  border-radius: 75px;
  text-align: center;
  line-height: 150px;
  text-decoration: none;
`;

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Button to='products'>상품 목록</Button>
        <Button to='cart' light>장바구니</Button>
      </Fragment>
    );
  }
}

export default Home;
