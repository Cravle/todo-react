import { FormikErrors, FormikValues } from 'formik'
import { SignUpForm } from '../pages/SignUp'

import { User } from '../types'

export const clearLS = () => localStorage.clear()

export const loginValidation = (values: User) => {
  const errors: FormikErrors<FormikValues> = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more'
  }
  return errors
}

export const registerValidation = (values: SignUpForm) => {
  const errors: FormikErrors<FormikValues> = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
    errors.password =
      'Minimum eight characters, at least one letter and one number'
  }
  if (values.password !== values.confirmed) {
    errors.confirmed = 'Both password need to be the same'
  }
  return errors
}
