import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from './'

const Box = styled.div`
  margin: 30px auto;
  width: 90vw;
  max-width: 700px;
  height: 150px;
  box-shadow: 0 0 10px 0 gray;
  overflow: hidden;
`;

const Image = styled.div`
  float: left;
  display: inline-block;
  height: 130px;
  width: 200px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    height: 150px;
    width: 220px;
    margin: 0px;
  }
  ${props => (`
    background-image: url(${props.src});
    background-size: cover;
  `)}
`;

const Text = styled.h1`
  width: 100%;
  height: 100%;
  display: inline-block;
  user-select: none;
  background: rgba(${props => props.check ? '145, 70, 255' : '0, 0, 0'}, 0.3);
  color: white;
  margin: 0px;
  line-height: 130px;
  text-align: center;
  &:hover {
    line-height: 150px;
  }
`;

const Title = styled.h4`
  float: left;
  width: 35%;
  margin: 0px;
  margin-top: 20px;
  margin-left: 10px;
`;

const Inline = styled.div`
  witdh: 50px;
  float: left;
  text-aline: right;
  margin: 10px;
`;

const Desc = styled.h4`
  display: inline;
  margin: 3px;
  color: ${props => props.color ? props.color : ''};
`;

const Right = styled.div`
  float: right;
  margin-right: 10px;
  margin-top: 40px;
`;

class Cart extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.CheckChange = this.CheckChange.bind(this)
    this.handleCountUp = this.handleCountUp.bind(this)
    this.handleCountDown = this.handleCountDown.bind(this)
    this.state = {
      select: this.props.state.select
    };
  }

  handleChange() {
    this.props.SelectDelete(this.props.element)
  }

  CheckChange() {
    this.props.CheckChange(this.props.element)
  }

  handleCountUp() {
    this.props.CountUp(this.props.element)
  }

  handleCountDown() {
    this.props.CountDown(this.props.element)
  }

  render() {
    const element = this.props.element
    const checked = this.state.select[this.state.select.indexOf(element)].check

    let Price = 0
    let Discount = ''
    if (element.availableCoupon !== false && this.props.state.value && this.props.state.value.type === 'rate') {
      Price += element.price * element.count * ((100 - this.props.state.value.discountRate) * 0.01)
      Discount = this.props.state.value.discountRate + '% 할인'
    } else {
      Price += element.price * element.count
    }

    return (
      <Box>
        <Image src={element.coverImage} onClick={this.CheckChange}>
          <Text check={checked}>{checked ? '선택됨' : '제외됨'}</Text>
        </Image>
        <Title>{element.title}</Title>
        <Inline>
          <Button onClick={this.handleChange} light>빼기</Button>
        </Inline>
        <Right>
          <Desc color='red'>{Discount}</Desc>
          <Desc color='orange'>{element.availableCoupon === false ? '쿠폰 적용 불가 ' : ''}</Desc>
          <Desc>{Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Desc>
          <Button onClick={this.handleCountDown} flat>-</Button>
          <Button light>{element.count}개</Button>
          <Button onClick={this.handleCountUp} flat>+</Button>
        </Right>
      </Box>
    );
  }
}

export default Cart;
