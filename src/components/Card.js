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
  render() {
    return (
      <Box>
        <Image src={this.props.img} />
        <Content>
          <Title>{this.props.title}</Title>
          <Price>{this.props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
          <Right>
            <Button>담기</Button>
          </Right>
        </Content>
      </Box>
    );
  }
}

export default Card;
