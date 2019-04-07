import styled from 'styled-components'

import theme from '../../global/theme'

const AddToCartButton = styled.button`
  background-color: ${theme.color.oxblood};
  color: ${theme.color.white};
  font-weight: bold;
  border: none;
  border-radius: ${theme.radius.basic};
  padding: 1.5rem;
  width: 32rem;
  max-width: 100%;

  :hover {
    background-color: #5f222e;
  }
`

export { AddToCartButton }
