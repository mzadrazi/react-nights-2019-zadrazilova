import styled from 'styled-components'
import { theme } from '../../global/theme'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`

export const GlobalFormError = styled.div`
  color: ${theme.color.error};
  text-align: center;
`
