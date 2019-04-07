import styled from 'styled-components'

import theme from '../../../global/theme'

export const Table = styled.table`
  background-color: ${theme.color.white};
  border-radius: ${theme.radius.basic};
  overflow: hidden;
`

export const Th = styled.th`
  background: ${theme.color.oxblood};
  color: ${theme.color.white};
  padding: 8px 16px;
`

export const Td = styled.td`
  padding: 8px 16px;
`
