import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import { basicTheme } from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#212121',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={basicTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
