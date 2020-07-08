import React, { Component } from 'react';
import { MessageBox } from '../components'

class NotFound extends Component {
  render() {
    return (
      <MessageBox
        title='404'
        desc='요청하신 페이지를 찾을 수 없습니다.'
        button='홈으로 가기'
        to='/'
      />
    );
  }
}

export default NotFound;
