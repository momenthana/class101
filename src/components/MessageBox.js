import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from './'

const Box = styled.div`
  margin: 15vh auto;
  text-align: center;
`;

class MessageBox extends Component {
  render() {
    return (
      <Box>
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
        <Button to={this.props.to} center>{this.props.button}</Button>
      </Box>
    );
  }
}

export default MessageBox;
