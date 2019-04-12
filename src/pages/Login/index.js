import React from 'react'
import { Formik } from 'formik'

import { H1 } from '../../components/Headings'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Form } from '../../components/Form'
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
        <H1 textAlign="center">Login</H1>
        <Formik
          isInitialValues={this.initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={schema}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
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
