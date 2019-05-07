import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Formik, FormikActions } from 'formik'
import { toast } from 'react-toastify'

import { H1 } from '../../components/Headings'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Form, GlobalFormError } from '../../components/Form'

import { AsyncValidationError } from '../../utils/errors'
import { requestLogin } from '../../store/userSession/actions'
import { MY_ACCOUNT } from '../../routes'
import { schema } from './schema'

type Props = typeof mapDispatchToProps & {
  history: {
    push: (path: string) => void
  }
}

type LoginFormValues = {
  email: string
  password: string
}

const LoginForm: FC<Props> = props => {
  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting, setStatus }: FormikActions<LoginFormValues>
  ) => {
    try {
      setSubmitting(true)

      await props.dispatchRequestLogin(values)

      props.history.push(MY_ACCOUNT)
      toast.success('You have been successfully logged in.')
    } catch (error) {
      if (error instanceof AsyncValidationError) {
        setStatus({
          globalError: error.message,
        })
      } else {
        toast.error(`An unexpected error happend. Please try again.`)
        // TODO: error reporting to external service
        console.error(error)
      }
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

const mapDispatchToProps = {
  dispatchRequestLogin: requestLogin,
}

const Login = connect(
  null,
  mapDispatchToProps
)(LoginForm)

export { Login }