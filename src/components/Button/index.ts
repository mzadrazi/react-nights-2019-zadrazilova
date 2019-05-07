import styled from 'styled-components'

import { theme } from '../../global/theme'

type ButtonProps = {
  fullWidth?: boolean
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ disabled }) =>
    disabled ? theme.color.border : theme.color.oxblood};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) =>
    disabled ? theme.color.black : theme.color.white};
  font-weight: bold;
  border: none;
  border-radius: ${theme.radius.basic};
  padding: 1.5rem;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '32rem')};
  max-width: 100%;
  margin: 1rem auto;

  :hover {
    background-color: ${({ disabled }) =>
      disabled ? theme.color.border : '#5f222e'};
  }
`

export { Button }
