import React, { Component, Fragment } from 'react';
import { CartCard, Button, MessageBox } from '../components'
import styled from 'styled-components'

import coupons from '../data/coupons'

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
  margin-left: 5px;
  color: ${props => props.color ? props.color : ''};
`;

const Price = styled.p`
  display: inline-block;
  margin: 10px;
`;

const Left = styled.div`
  width: 100%;
  float: left;
  margin-left: 10px;
`;

const Right = styled.div`
  float: right;
  margin-right: 25px;
`;

const Select = styled.select`
  width: 170px;
  height: 35px;
  background: rgba(255,255,255,0);
  padding: 5px;
  font-size: 15px;
  border: none;
  margin-left: -20px;
  margin-right: 10px;
  outline: 0px;
`;

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      select: this.props.state.select,
      value: {
        title: 'init'
      }
    };
  }

  render() {
    const couponChange = (e) => {
      coupons.forEach(element => {
        if (e.target.value === element.title) {
          this.setState({value: element})
        }
      })
    }

    const couponDelete = () => {
      this.setState({value: {title: 'init'}})
    }

    const CheckChange = (element) => {
      let selected = this.state.select
      selected[selected.indexOf(element)].check = !selected[selected.indexOf(element)].check
      this.setState({ select: selected })
    }

    const CountDown = (element) => {
      let selected = this.state.select
      let search = selected.indexOf(element)
      if (selected[search].count > 1) {
        selected[search].count -= 1
        this.setState({ select: selected })
      } else {
        alert('최소 1개 이상이어야 합니다.');
      }
    }

    const CountUp = (element) => {
      let selected = this.state.select
      let search = selected.indexOf(element)
      selected[search].count += 1
      this.setState({ select: selected })
    }

    const CardList = this.props.state.select.map(element => {
      return (
        <CartCard
          key={element.id}
          element={element}
          state={this.state}
          SelectDelete={this.props.SelectDelete}
          CheckChange={CheckChange}
          CountDown={CountDown}
          CountUp={CountUp}
          cart
        />
      )
    })

    const Coupons = coupons.map(element => {
      return (
        <option value={element.title}>{element.title}</option>
      )
    })

    let PriceAll = 0
    let CheckCount = 0
    let AvailableFalseCount = 0
    let Dis = ''
    let Alert = ''
    this.props.state.select.forEach(element => {
      if (element.check) {
        CheckCount++
        if (element.availableCoupon === false) {
          PriceAll += element.price * element.count
          AvailableFalseCount++
        } else {
          if (this.state.value && this.state.value.type === 'rate') {
            PriceAll += element.price * element.count * ((100 - this.state.value.discountRate) * 0.01)
          } else {
            PriceAll += element.price * element.count
          }
        }
      }
    })
    if (CheckCount && this.state.value && (this.state.value.type === 'rate' || this.state.value.type === 'amount') && CheckCount === AvailableFalseCount) {
      Alert = '모든 상품 쿠폰 적용 불가'
    } else {
      if (this.state.value && this.state.value.type === 'amount') {
        if (PriceAll !== 0) {
          PriceAll -= this.state.value.discountAmount
          Dis = this.state.value.discountAmount + '원 할인'
        }
      }
    }

    return (
      <Fragment>
        {this.props.state.select.length ? '' :
          <MessageBox
            title='비어있어요!'
            desc='장바구니에 상품이 담겨있지 않아요. 상품을 찾으러 가볼까요!'
            button='상품 목록으로 가기'
            to='/products'
          />
        }
        {CardList}
        <Box>
          <Left>
            <Title>쿠폰</Title>
            <Select onChange={couponChange} value={this.state.value.title}>
              <option value='init' hidden>
                을 선택해주세요!
              </option>
              {Coupons}
            </Select>
            <Button light hide={ this.state.value.title === 'init' ? true : false } onClick={couponDelete}>취소</Button>
          </Left>
          <Right>
            <Title color='orange'>{Alert}</Title>
            <Title color='red'>{Dis}</Title>
            <Title>총 결제 금액</Title>
            <Price>{PriceAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
            <Button>결제하기</Button>
          </Right>
        </Box>
      </Fragment>
    );
  }
}

export default Cart;
