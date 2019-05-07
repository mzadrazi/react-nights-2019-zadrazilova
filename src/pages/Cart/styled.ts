import styled from 'styled-components'

import { theme } from '../../global/theme'

export const Wrapper = styled.div`
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.basic};
  overflow: hidden;
  padding: 0 3rem 3rem;
`

export const TotalPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
`
