import styled from 'styled-components'

import { theme } from '../../global/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
`

export const Label = styled.label`
  margin-bottom: 0.6rem;
  font-weight: bold;
`

export const StyledInput = styled.input`
  border: 1px solid
    ${({ hasError }) => (hasError ? theme.color.error : theme.color.border)};
  border-radius: ${theme.radius.basic};
  padding: 1rem;
`

export const StyledError = styled.div`
  color: ${theme.color.error};
  margin-top: 0.4rem;
`
