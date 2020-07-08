import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from '.'

const Box = styled.div`
  margin: 30px auto;
  width: 90vw;
  max-width: 700px;
  height: 150px;
  box-shadow: 0 0 10px 0 gray;
`;

const Image = styled.img`
  display: inline;
  height: 130px;
  margin: 10px;
`;

const Title = styled.h4`
  display: inline-block;
  position: absolute;
  margin-left: 10px;
  width: 40%;
  overflow: hidden;
`;

const Price = styled.p`
  display: block;
`;

const Right = styled.div`
  float: right;
  margin-top: 45px;
  margin-right: 25px;
`;

class Cart extends Component {
  render() {
    return (
      <Box>
        <Image src={this.props.img} />
        <Title>{this.props.title}</Title>
        <Right>
          <Price>{this.props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
          <Button light>빼기</Button>
        </Right>
      </Box>
    );
  }
}

export default Cart;
