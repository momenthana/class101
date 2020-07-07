import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from '../components'

const Nav = styled.header`
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
`;

const Logo = styled.h1`
  display: inline;
  margin: 0px;
  margin-left: 25px;
  font-size: 30px;
  line-height: 50px;
`;

const Right = styled.div`
  float: right;
  margin-top: 7.5px;
  margin-right: 25px;
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
