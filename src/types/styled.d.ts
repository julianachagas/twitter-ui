import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      accent: string;
      separator: string;
      textHighlight: string;
      textLight: string;
      stroke: string;
      placeholder: string;
    };
  }
}
