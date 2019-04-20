import React from 'react'
import { connect } from 'react-redux'
import { shape, func } from 'prop-types'
import { Formik } from 'formik'

import { H1 } from '../../components/Headings'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Form, GlobalFormError } from '../../components/Form'
import { requestLogin } from '../../store/userSession/actions'

import { MY_ACCOUNT } from '../../routes'

import schema from './schema'

const LoginForm = props => {
  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      setSubmitting(true)

      await props.dispatchRequestLogin(values)

      props.history.push(MY_ACCOUNT)
    } catch (error) {
      setStatus({
        globalError: error.message,
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <H1 textAlign="center">Login</H1>
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

LoginForm.propTypes = {
  dispatchRequestLogin: func.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

const mapDispatchToProps = {
  dispatchRequestLogin: requestLogin,
}

const Login = connect(
  null,
  mapDispatchToProps
)(LoginForm)

export { Login }
