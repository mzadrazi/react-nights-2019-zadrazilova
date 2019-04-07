import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import theme from '../../global/theme'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.white};
  height: 5rem;
  margin: 0;
  padding: 0 3rem;
  border-bottom: 1px solid ${theme.color.border};
`

export const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`
export const Nav = styled.nav``

export const NavLink = styled(RouterLink)`
  color: ${theme.color.oxblood};
  text-decoration: none;
  font-weight: bold;
  margin: 0 8px;

  :hover {
    text-decoration: underline;
  }
`

export const MainTitle = styled.h1`
  margin: 0;
  color: ${theme.color.oxblood};
`

export const Main = styled.main`
  margin: 1.5rem 3rem;
`
