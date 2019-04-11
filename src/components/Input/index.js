import React from 'react'
import { string } from 'prop-types'
import { Field } from 'formik'

import { Label, StyledError, StyledInput, Wrapper } from './styled'

const Input = (
  { label, name, type = 'text' } // eslint-disable-line no-shadow
) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const { errors, touched } = form
      const hasError = touched[name] && Boolean(errors[name])

      return (
        <Wrapper>
          <Label htmlFor={name}>{label}</Label>
          <StyledInput {...field} id={name} type={type} hasError={hasError} />
          {hasError && <StyledError>{errors[name]}</StyledError>}
        </Wrapper>
      )
    }}
  />
)

Input.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
}

export { Input }
