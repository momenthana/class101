import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Box = styled.div`
  margin-top: 25vh;
  text-align: center;
`;

const Button = styled(Link)`
  display: block;
  margin: 0px auto;
  width: 100px;
  height: 35px;
  background: #9146ff;
  color: white;
  font-size: 15px;
  border-radius: 17.5px;
  text-align: center;
  line-height: 35px;
  text-decoration: none;
`;

class NotFound extends Component {
  render() {
    return (
      <Box>
        <h1>404</h1>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
        <p>입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>
        <Button to='/'>홈으로 가기</Button>
      </Box>
    );
  }
}

export default NotFound;
