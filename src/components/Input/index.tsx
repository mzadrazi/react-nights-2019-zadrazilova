import React, { FC } from 'react'
import { Field, FieldProps } from 'formik'

import { Label, StyledError, StyledInput, Wrapper } from './styled'

type Props = {
  isRequired?: boolean
  label: string
  name: string
  type?: string
}

const Input: FC<Props> = (
  { label, name, type = 'text', isRequired = false } // eslint-disable-line no-shadow
) => (
  <Field
    name={name}
    render={({ field, form }: FieldProps) => {
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

export { Input }
