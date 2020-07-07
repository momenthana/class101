import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  display: inline-block;
  ${props => props.center ? 'margin: 0px auto' : ''};
  padding: 0px 20px;
  height: 35px;
  background: #9146ff;
  color: white;
  font-size: 15px;
  border-radius: 17.5px;
  text-align: center;
  line-height: 35px;
  text-decoration: none;
`;

export default Button;
