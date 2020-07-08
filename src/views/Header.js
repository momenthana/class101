import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from '../components'
import { Link } from 'react-router-dom';

const Nav = styled.header`
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
`;

const Logo = styled(Link)`
  display: inline;
  margin: 0px;
  margin-left: 25px;
  font-size: 30px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
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
        <Logo to='/'>CLASS101</Logo>
        <Right>
          <Button to='/cart'>장바구니</Button>
        </Right>
      </Nav>
    );
  }
}

export default Header;
