import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    @import url('')
    * {
        margin:0;
        padding:0;
        font-family:'Raleway', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.colors.primary};
      }
`;
