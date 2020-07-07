import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from '../components'

const Box = styled.div`
  margin: 25vh auto;
  text-align: center;
`;

class NotFound extends Component {
  render() {
    return (
      <Box>
        <h1>404</h1>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
        <p>입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>
        <Button to='/' center>홈으로 가기</Button>
      </Box>
    );
  }
}

export default NotFound;
