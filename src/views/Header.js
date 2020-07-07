import React, { Component } from 'react';
import styled from 'styled-components'
import { Button, Right } from '../components'

const Nav = styled.header`
  height: 50px;
`;

const Logo = styled.h1`
  display: inline;
  margin: 0px;
  margin-left: 25px;
  font-size: 30px;
  line-height: 50px;
`;

class Header extends Component {
  render() {
    return (
      <Nav>
        <Logo>CLASS101</Logo>
        <Right>
          <Button>장바구니</Button>
        </Right>
      </Nav>
    );
  }
}

export default Header;
