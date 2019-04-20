import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import theme from '../../../../global/theme'

export const ProductWrap = styled.li`
  list-style-type: none;
`

export const Link = styled(RouterLink)`
  display: inline-block;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.basic};
  padding: 1.5rem;
  width: 25rem;
  margin-bottom: 1.5rem;
  background-color: ${theme.color.white};
  text-decoration: none;
  color: ${theme.color.black};
  overflow: hidden;

  :hover {
    box-shadow: 0.2rem 0.2rem 1rem #ccc;
  }
`

export const ImgWrap = styled.div`
  width: 100%;
  text-align: center;
`

export const Img = styled.img`
  max-width: 100%;
`

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`
