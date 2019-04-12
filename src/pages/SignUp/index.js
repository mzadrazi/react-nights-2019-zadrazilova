import React from 'react'
import { Formik } from 'formik'

import { H1 } from '../../components/Headings'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Form } from '../../components/Form'
import schema from './schema'

class SignUp extends React.Component {
  state = {
    hasSignedUp: false,
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

      //@TODO: implement API call
      alert('Form submitted!')

      this.setState({
        hasSignedUp: true,
      })
    } catch (error) {
      this.setState({ globalError: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  render() {
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
              <Input name="firstName" label="First name" />
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
              <Input
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
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

export { SignUp }
