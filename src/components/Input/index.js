import React from 'react'
import { bool, string } from 'prop-types'
import { Field } from 'formik'

import { Label, StyledError, StyledInput, Wrapper } from './styled'

const Input = (
  { label, name, type = 'text', isRequired } // eslint-disable-line no-shadow
) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const { errors, touched } = form
      const hasError = touched[name] && Boolean(errors[name])

      return (
        <Wrapper>
          <Label htmlFor={name}>
            {label}
            {isRequired && ' (required)'}
          </Label>
          <StyledInput {...field} id={name} type={type} hasError={hasError} />
          {hasError && <StyledError>{errors[name]}</StyledError>}
        </Wrapper>
      )
    }}
  />
)

Input.propTypes = {
  isRequired: bool,
  label: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
}

Input.defaultProps = {
  isRequired: false,
}

export { Input }
