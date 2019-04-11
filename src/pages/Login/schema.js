import { object, string } from 'yup'

const schema = object().shape({
  email: string()
    .email('Email is not valid')
    .required('Email is required'),
  password: string()
    .min(4, 'Password is too short')
    .max(30, 'Password is too long')
    .matches(/[0-9]/u, 'Password must contain at least one number')
    .matches(/[a-z]/u, 'Password must contain at least one lowercase letter')
    .required('Password is required'),
})

export default schema
