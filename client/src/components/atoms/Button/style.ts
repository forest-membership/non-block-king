import styled, { DefaultTheme } from 'styled-components';

interface IStyledButtonProps {
  theme: DefaultTheme;
  variant: string;
  color: string;
}

function getBackgroundColor({ theme, variant, color }: IStyledButtonProps) {
  switch (variant) {
    case 'contained':
      return theme.colors[color];
    case 'outlined':
      return 'transparent';
    default:
      return '';
  }
}

function getFontColor({ theme, variant, color }: IStyledButtonProps) {
  switch (variant) {
    case 'contained':
      return theme.colors.white;
    case 'outlined':
      return theme.colors[color];
    default:
      return '';
  }
}

function getBorder({ theme, variant, color }: IStyledButtonProps) {
  switch (variant) {
    case 'contained':
      return 'none';
    case 'outlined':
      return `1px solid ${theme.colors[color]}`;
    default:
      return '';
  }
}

export const Button = styled.button<IStyledButtonProps>`
  padding: 20px 10px;
  border: ${(props) => getBorder(props)};
  border-radius: ${(props) => props.theme.radiuses.button};
  background-color: ${(props) => getBackgroundColor(props)};
  color: ${(props) => getFontColor(props)};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;
