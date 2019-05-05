import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { toast } from 'react-toastify'

import { H1 } from '../../components/Headings'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Form, GlobalFormError } from '../../components/Form'

import { AsyncValidationError } from '../../utils/errors'
import { schema } from './schema'
import { signUpUser } from '../../store/userSession/actions'
import { MY_ACCOUNT } from '../../routes'

type Props = typeof mapDispatchToProps

const SignUpForm: FC<Props> = props => {
  const initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      setSubmitting(true)

      await props.dispatchSignUpUser(values)

      toast.success('You have been successfully signed up.')
      props.history.push(MY_ACCOUNT)
    } catch (error) {
      if (error instanceof AsyncValidationError) {
        setStatus({ globalError: error.message })
      } else {
        toast.error(
          'An unexpected error happened during signing up. Please try again.'
        )
        //TODO: report error
        console.error(error.message)
      }
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

// SignUpForm.propTypes = {
//   dispatchSignUpUser: func.isRequired,
//   history: shape({
//     push: func.isRequired,
//   }).isRequired,
// }

const mapDispatchToProps = {
  dispatchSignUpUser: signUpUser,
}

const SignUp = connect(
  null,
  mapDispatchToProps
)(SignUpForm)

export { SignUp }
