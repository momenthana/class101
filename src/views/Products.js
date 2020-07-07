import React, { Component, Fragment } from 'react';
import { Button, Card } from '../components'
import styled from 'styled-components'

const Nav = styled.div`
  text-align: center;
  margin 50px;
`;

class Products extends Component {
  state = {
    page: 1,
    start: 0,
    end: 5
  }

  render() {
    const items = this.props.state.items.sort((a, b) => {
      return b.score - a.score;
    });

    const pages = []
    for (let i = 1; i <= Math.ceil(items.length / 5); i++) {
      pages.push(i);
    }

    const Page = items.slice(this.state.start, this.state.end);
    const CardList = Page.map(element => {
      return (
        <Card img={element.coverImage}
          title={element.title}
          price={element.price}
        />
      )
    });

    const NumberList = pages.map(number => {
      return (
        <Button light flat>{number}</Button>
      )
    });

    return (
      <Fragment>
        {CardList}
        <Nav>
          <Button>이전</Button>
          {NumberList}
          <Button>다음</Button>
        </Nav>
      </Fragment>
    );
  }
}

export default Products;
