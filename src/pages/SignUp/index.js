import React from 'react'
import { Formik } from 'formik'

import schema from './schema'

import { Input } from '../../components/Input'

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
        <h1>Sign Up</h1>
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={schema}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Input name="firstName" label="First name" />
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
              <Input
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing up ...' : 'Sign Up'}
              </button>
            </form>
          )}
        </Formik>
      </>
    )
  }
}

export { SignUp }
