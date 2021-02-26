import styled from 'styled-components';
import Block from '../../atoms/Block';

export const ScoreBoard = styled(Block)`
  padding: 20px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.white};
`;
