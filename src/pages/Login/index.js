import React from 'react'
import { shape, func } from 'prop-types'
import { Formik } from 'formik'

import { H1 } from '../../components/Headings'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Form, GlobalFormError } from '../../components/Form'
import { login } from '../../api/login'

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

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)

      await login(values)

      this.props.history.push('/my-account')
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

Login.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

export { Login }
