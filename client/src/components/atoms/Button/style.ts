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
      return theme.colors.white;
    default:
      return '';
  }
}

function getFontColor({ theme, variant, color }: IStyledButtonProps) {
  switch (variant) {
    case 'contained':
      return theme.colors.black;
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
  padding: 10px;
  border: ${(props) => getBorder(props)};
  border-radius: 12px;
  background-color: ${(props) => getBackgroundColor(props)};
  color: ${(props) => getFontColor(props)};
`;
