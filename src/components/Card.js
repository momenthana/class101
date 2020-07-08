import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from './'

const Box = styled.div`
  margin: 30px auto;
  width: 70vw;
  max-width: 600px;
  box-shadow: 0 0 10px 0 gray;
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  height: 70px;
`;

const Title = styled.h4`
  margin: 10px;
  margin-left: 15px;
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.p`
  display: inline-block;
  margin: 5px;
  margin-left: 15px;
`;

const Right = styled.div`
  float: right;
  margin-top: -7.5px;
  margin-right: 25px;
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    if (this.props.state.select.indexOf(this.props.element) === -1) {
      this.props.SelectChange(this.props.element);
    } else {
      this.props.SelectDelete(this.props.element);
    }
  }

  render() {
    const selected = this.props.state.select.indexOf(this.props.element) !== -1

    return (
      <Box>
        <Image src={this.props.element.coverImage} />
        <Content>
          <Title>{this.props.element.title}</Title>
          <Price>{this.props.element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
          <Right>
            <Button onClick={this.handleChange} light={selected}>{selected? '빼기' : '담기'}</Button>
          </Right>
        </Content>
      </Box>
    );
  }
}

export default Card;
