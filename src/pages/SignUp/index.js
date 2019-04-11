import React from 'react'
import { Formik } from 'formik'

import { Input } from '../../components/Input'

class SignUp extends React.Component {
  initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handleSubmit = () => {
    //@TODO: implement
    alert('Form submitted!')
  }

  render() {
    return (
      <>
        <h1>Sign Up</h1>
        <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Input name="firstName" label="First name" />
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
              <Input
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
              />
              <button type="submit">Sign Up</button>
            </form>
          )}
        </Formik>
      </>
    )
  }
}

export { SignUp }
