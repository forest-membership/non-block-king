import styled from 'styled-components';

export const Input = styled.input`
  padding: 15px 20px;
  border: none;
  border-radius: ${(props) => props.theme.radiuses.input};
  background-color: ${(props) => props.theme.colors.lightgray};

  &::placeholder {
    font-size: 1rem;
    font-weight: 500;
  }
`;
