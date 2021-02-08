import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [index: string]: string;
    };

    sizes: {
      [index: string]: number;
    };

    radiuses: {
      [index: string]: string;
    };
  }
}
