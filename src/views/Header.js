import React from 'react';
import styled from 'styled-components'

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

const Button = styled.div`
  float: right;
  margin-top: 7.5px;
  margin-right: 25px;
  width: 100px;
  height: 35px;
  background: #9146ff;
  color: white;
  font-size: 17.5px;
  border-radius: 17.5px;
  text-align: center;
  line-height: 35px;
`;

class Header extends React.Component {
  render() {
    return (
      <Nav>
        <Logo>CLASS101</Logo>
        <Button>장바구니</Button>
      </Nav>
    );
  }
}

export default Header;
