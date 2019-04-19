import React from 'react'
import { shape, func } from 'prop-types'
import { Formik } from 'formik'

import { H1 } from '../../components/Headings'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Form, GlobalFormError } from '../../components/Form'
import schema from './schema'
import { createCustomer } from '../../api/customer/createCustomer'

const SignUp = props => {
  const initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      setSubmitting(true)

      await createCustomer(values)

      // TODO: instead of redirect, log user in
      props.history.push('/login')
    } catch (error) {
      setStatus({ globalError: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <H1 textAlign="center">Sign Up</H1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit, isSubmitting, status: formStatus }) => (
          <Form onSubmit={handleSubmit}>
            {formStatus && (
              <GlobalFormError>{formStatus.globalError}</GlobalFormError>
            )}
            <Input name="firstName" label="First name" />
            <Input name="email" label="Email" type="email" isRequired />
            <Input
              name="password"
              label="Password"
              type="password"
              isRequired
            />
            <Input
              name="passwordConfirm"
              label="Confirm Password"
              type="password"
              isRequired
            />
            <Button type="submit" disabled={isSubmitting} fullWidth>
              {isSubmitting ? 'Signing up ...' : 'Sign Up'}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

SignUp.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

export { SignUp }
