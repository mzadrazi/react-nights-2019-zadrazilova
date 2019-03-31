import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'

import theme from './global/theme'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${theme.color.background};
    color: ${theme.color.black};
  }

  #root {
    width: 100%;
    height: 100%;
  }
`
export default GlobalStyles
