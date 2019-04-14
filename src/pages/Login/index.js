import React from 'react'
import { Formik } from 'formik'

import { H1 } from '../../components/Headings'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Form, GlobalFormError } from '../../components/Form'
//@TODO: DRY - same definition of email and password in schema - can be reused?
import schema from './schema'
import { login } from '../../api/login'

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
      await login(values)

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
    const { globalError } = this.state

    return (
      <>
        <H1 textAlign="center">Login</H1>
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
              <Input name="email" label="Email" type="email" isRequired />
              <Input
                name="password"
                label="Password"
                type="password"
                isRequired
              />
              <Button type="submit" disabled={isSubmitting} fullWidth>
                {isSubmitting ? 'Logging in ...' : 'Log in'}
              </Button>
            </Form>
          )}
        </Formik>
      </>
    )
  }
}

export { Login }
