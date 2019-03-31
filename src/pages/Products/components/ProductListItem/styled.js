import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import theme from '../../../../global/theme'

//TODO use relative units, not pixels
export const ProductWrap = styled.li`
  list-style-type: none;
`

export const Link = styled(RouterLink)`
  display: inline-block;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.basic};
  padding: 15px;
  width: 250px;
  margin-bottom: 15px;
  background-color: ${theme.color.white};
  text-decoration: none;
  color: ${theme.color.black};
`

export const ImgWrap = styled.div`
  width: 100%;
  text-align: center;
`

export const Img = styled.img``

export const Title = styled.strong``
