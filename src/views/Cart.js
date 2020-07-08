import React, { Component, Fragment } from 'react';
import { CartCard, Button } from '../components'
import styled from 'styled-components'

const Box = styled.div`
  margin: 30px auto;
  width: 90vw;
  max-width: 700px;
  height: 100px;
  box-shadow: 0 0 10px 0 gray;
`;

const Title = styled.h4`
  display: inline-block;
  margin: 15px;
  margin-right: -3px;
`;

const Price = styled.p`
  display: inline-block;
  margin: 20px;
`;

const Right = styled.div`
  float: right;
  margin-top: 40px;
  margin-right: 25px;
`;

const Select = styled.select`
  width: 150px;
  height: 35px;
  background: rgba(255,255,255,0);
  padding: 5px;
  font-size: 15px;
  border: none;
  margin-right: 10px;
`;

class Cart extends Component {
  render() {
    const CardList = this.props.state.select.map(element => {
      return (
        <CartCard
          element={element}
          state={this.props.state}
          SelectDelete={this.props.SelectDelete}
          cart
        />
      )
    });

    return (
      <Fragment>
        {CardList}
        <Box>
          <Title>쿠폰</Title>
          <Select>
            <option value="" hidden>
              을 선택해주세요!
            </option>
            <option value="1">?</option>
            <option value="1">?</option>
          </Select>
          <Button light hide={true}>취소</Button>
          <Right>
            <Title>총 결제금액</Title>
            <Price>{'100000'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
            <Button>결제하기</Button>
          </Right>
        </Box>
      </Fragment>
    );
  }
}

export default Cart;
