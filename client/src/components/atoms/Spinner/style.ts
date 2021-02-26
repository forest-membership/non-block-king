import styled, { keyframes } from 'styled-components';

/**
 * ref: https://projects.lukehaas.me/css-loaders/
 */

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 4em;
  height: 4em;
  border-top: 0.6em solid rgba(255, 255, 255, 0.2);
  border-right: 0.6em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.6em solid rgba(255, 255, 255, 0.2);
  border-left: 0.6em solid ${(props) => props.theme.colors.white};
  border-radius: 50%;
  animation: ${rotate} 0.7s infinite linear;
`;
