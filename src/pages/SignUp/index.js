import React from 'react'
import { shape, func } from 'prop-types'
import { Formik } from 'formik'

import { H1 } from '../../components/Headings'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Form, GlobalFormError } from '../../components/Form'
import schema from './schema'
import { createCustomer } from '../../api/customer/createCustomer'

class SignUp extends React.Component {
  state = {
    globalError: '',
  }

  initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)

      await createCustomer(values)

      // TODO: instead of redirect, log user in
      this.props.history.push('/login')
    } catch (error) {
      console.error(error)
      console.error(error.message)
      this.setState({ globalError: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  render() {
    const { globalError } = this.state

    return (
      <>
        <H1 textAlign="center">Sign Up</H1>

        <Formik
          initialValues={this.initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={schema}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {Boolean(globalError) && (
                <GlobalFormError>{globalError}</GlobalFormError>
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
}

SignUp.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

export { SignUp }
