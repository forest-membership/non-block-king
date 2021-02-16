import styled from 'styled-components';
import { Input } from '../../atoms/Input/style';
import { Button } from '../../atoms/Button/style';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.green};
  border-radius: 12px;
`;

export const NicknameInput = styled(Input)`
  width: 250px;
  margin-right: auto;
  background-color: transparent;
  color: ${(props) => props.theme.colors.green};
  outline: none;
  font-size: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const SigninButton = styled(Button)`
  font-size: 1rem;
  font-weight: 600;
`;
