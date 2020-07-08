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

const Image = styled.div`
  display: inline-block;
  height: 130px;
  width: 200px;
  margin: 10px;
  cursor: pointer;
  ${props => (`
    background-image: url(${props.src});
    background-size: cover;
    `
  )}
`;

const Text = styled.h2`
  width: 100%;
  height: 100%;
  display: inline-block;
  user-select: none;
  background: rgba(${props => props.check ? '145, 70, 255' : '0, 0, 0'}, 0.3);
  color: white;
  margin: 0px;
  line-height: 130px;
  text-align: center;
`;

const Transform = styled.span`
  display: inline-block;
  transform: scale(1, -1);
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
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      select: this.props.state.select
    };
  }

  handleChange() {
    this.props.SelectDelete(this.props.element)
  }

  render() {
    const SelectChange = () => {
      if (this.state.select.indexOf(this.props.element) === -1) {
        let selected = this.state.select
        selected.push(this.props.element)
        this.setState({ select: selected })
      } else {
        let selected = this.state.select
        let search = selected.indexOf(this.props.element)
        selected.splice(search, 1)
        this.setState({ select: selected })
      }
    }

    const selected = this.state.select.indexOf(this.props.element) !== -1

    return (
      <Box>
        <Image src={this.props.element.coverImage} onClick={SelectChange}>
          <Text check={selected}><Transform>{selected ? 'ㅅ' : ''}</Transform>{selected ? '선택됨' : '해제됨'}</Text>
        </Image>
        <Title>{this.props.element.title}</Title>
        <Right>
          <Price>{this.props.element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
          <Button onClick={this.handleChange} light>빼기</Button>
        </Right>
      </Box>
    );
  }
}

export default Cart;
