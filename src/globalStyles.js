import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'

import theme from './global/theme'

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: ${theme.color.background};
    color: ${theme.color.black};
  }

  #root {
    width: 100%;
    height: 100%;
  }

  p {
    line-height: 1.5;
    max-width: 50rem;
  }
`
export default GlobalStyles
