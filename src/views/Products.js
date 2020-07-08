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
        <Card
          element={element}
          state={this.props.state}
          SelectChange={this.props.SelectChange}
          SelectDelete={this.props.SelectDelete}
        />
      )
    });

    const Select = e => {
      const number = Number(e.target.id)
      this.setState({
        page: number,
        start: 5 * (number - 1),
        end: 5 * number
      })
    }

    const NumberList = pages.map(number => {
      return (
        <Button flat
          id={number}
          light={this.state.page === number ? false : true}
          onClick={Select}
        >
          {number}
        </Button>
      )
    })

    const Prev = () => {
      const { page, start, end } = this.state
      if (page > 1) {
        this.setState({
          page: page - 1,
          start: start - 5,
          end: end - 5
        })
      }
    }

    const Next = () => {
      const { page, start, end } = this.state
      if (page < pages.length) {
        this.setState({
          page: page + 1,
          start: start + 5,
          end: end + 5
        })
      }
    }

    return (
      <Fragment>
        {CardList}
        <Nav>
          <Button hide={this.state.page === 1 ? true : false} onClick={Prev}>이전</Button>
          {NumberList}
          <Button hide={this.state.page === pages.length ? true : false} onClick={Next}>다음</Button>
        </Nav>
      </Fragment>
    );
  }
}

export default Products;
