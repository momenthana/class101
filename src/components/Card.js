import React, { Component } from 'react';
import styled from 'styled-components'
import { Button, Right } from './'

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
  height: 52.5px;
`;

const Title = styled.h4`
  display: inline-block;
  margin: 3px;
  margin-left: 15px;
`;

const Price = styled.p`
  margin: 0px;
  margin-left: 15px;
`;

class Card extends Component {
  render() {
    return (
      <Box>
        <Image src={this.props.img} />
        <Content>
          <Title>{this.props.title}</Title>
          <Right>
            <Button>담기</Button>
          </Right>
          <Price>{this.props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
        </Content>
      </Box>
    );
  }
}

export default Card;
