import React, { Component } from 'react';
import { Button } from './'
import styled from 'styled-components'

const Nav = styled.div`
  text-align: center;
`;

class Pagination extends Component {
  render() {
    const pages = []
    for (let i = 1; i <= Math.ceil(this.props.items.length / 5); i++) {
      pages.push(i);
    }

    const List = pages.map(number => {
      return (
        <Button light flat>{number}</Button>
      )
    });

    return (
      <Nav>
        <Button>이전</Button>
        {List}
        <Button>다음</Button>
      </Nav>
    );
  }
}

export default Pagination;
