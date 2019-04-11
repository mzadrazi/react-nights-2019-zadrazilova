import React from 'react'
import { Formik } from 'formik'

import { Input } from '../../components/Input'
//@TODO: DRY - same definition of email and password in schema - can be reused?
import schema from './schema'

class Login extends React.Component {
  state = {
    hasLoggedIn: false,
    globalError: '',
  }

  initialValues = {
    email: '',
    password: '',
  }

  //@TODO: prevent default?
  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)

      //call api
      alert('Logging in')

      this.setState({
        hasLoggedIn: true,
      })
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    } finally {
      setSubmitting(false)
    }
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <Formik
          isInitialValues={this.initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={schema}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in ...' : 'Log in'}
              </button>
            </form>
          )}
        </Formik>
      </>
    )
  }
}

export { Login }
