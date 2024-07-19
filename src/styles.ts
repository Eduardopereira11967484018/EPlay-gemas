import { createGlobalStyle } from "styled-components";

export const colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  green: '#10AC84',
  lightGray: '#A3A3A3',
  darkGray: '#1E1E1E', // Um cinza mais escuro
  deepGreen: '#006B3F', // Um verde mais escuro
  charcoal: '#2C2C2C', // Um tom de cinza quase preto
  forestGreen: '#004D40', // Um verde floresta escuro
}


export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;
}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

@media (max-width: ${breakpoints.desktop} ){
  max-width: 80%;
}

}
`

