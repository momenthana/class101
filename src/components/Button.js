import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  display: inline-block;
  ${props => props.center ? 'margin: 0px auto' : ''};
  padding: 0px ${props => props.flat ? '0px' : '20px'};
  ${props => props.flat ? 'width: 35px' : ''};
  height: 35px;
  background: ${props => props.light ? 'white' : '#9146ff'};
  color: ${props => props.light ? '#9146ff' : 'white'};
  border: 1px solid #9146ff;
  font-size: 15px;
  border-radius: 17.5px;
  text-align: center;
  line-height: 35px;
  text-decoration: none;
  font-weight: bold;
  margin: ${props => props.flat ? '5px' : '0px'};
`;

export default Button;
