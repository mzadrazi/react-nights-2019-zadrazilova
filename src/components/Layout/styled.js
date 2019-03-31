import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import theme from '../../global/theme'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.white};
  height: 50px;
  margin: 0;
  padding: 0 30px;
  border-bottom: #d7cec7;
`

export const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`

export const MainTitle = styled.h1`
  margin: 0;
  color: ${theme.color.oxblood};
`

export const Main = styled.main`
  margin: 15px 30px;
`
