import styled from 'styled-components';

export const ToastBox = styled.div`
  position: absolute;
  bottom: -100px;
  right: 50px;
  padding: 20px 40px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.darkgray};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  transition: transform 0.3s ease;
`;
