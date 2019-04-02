import styled from 'styled-components'
import { textAlign } from 'styled-system'

import theme from '../../global/theme'

export const Price = styled.p`
  font-weight: bold;
  color: ${theme.color.oxblood};
  font-size: 1.4em;
  ${textAlign}
`
