import { FC } from 'react'
import { useHistory } from 'react-router'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import useActions from '@hooks//useActions'
import { User } from '@type//'
import { getError } from '@selectors//user'
import { registerValidation } from '@utils//'
import arrow from '../images/right.svg'

export type SignUpForm = {
  email: string
  password: string
  confirmed: string
}

const SignUp: FC = () => {
  const { setError, registerRequest } = useActions()
  const error: string = useSelector(getError)
  const history = useHistory()

  return (
    <Container>
      <Title>Sign up</Title>
      <Formik
        initialValues={{ email: '', password: '', confirmed: '' }}
        validate={registerValidation}
        onSubmit={(values) => {
          setError('')
          const newUser: User = {
            email: values.email,
            password: values.password,
          }
          registerRequest(newUser)
        }}
      >
        <StyledForm>
          <FormError>{error}</FormError>

          <FieldWrapper>
            <ErrorMessage component={StyledError} name="email" />
            <Input placeholder="Type your email" type="email" name="email" />
          </FieldWrapper>

          <FieldWrapper>
            <ErrorMessage component={StyledError} name="password" />
            <Input
              placeholder="Create your password"
              type="password"
              name="password"
            />
          </FieldWrapper>

          <FieldWrapper>
            <ErrorMessage component={StyledError} name="confirmed" />
            <Input
              placeholder="Repeat your password"
              type="password"
              name="confirmed"
            />
          </FieldWrapper>

          <WrapperButton>
            <StyledButton
              id="submit"
              bg={arrow}
              type="submit"
              color="secondary"
            />
          </WrapperButton>
        </StyledForm>
      </Formik>

      <LabelLink to="/login">Already has account?</LabelLink>
    </Container>
  )
}

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;
  position: relative;
  display: grid;
  justify-content: center;
  margin-top: 100px;
  border-radius: 20px;
  background-color: #96bfff;
`

const FieldWrapper = styled.div`
  margin-top: 29px;
  position: relative;
`

const WrapperButton = styled.div`
  text-align: center;
  margin-top: 15px;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 48px;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: -1px -1px rgb(0 0 0 / 20%);
`

const StyledForm = styled(Form)`
  padding: 20px 10px;
  position: relative; ;
`

const Input = styled(Field)`
  height: 30px;
  width: 300px;
  padding: 5px;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 10px;
`

const StyledButton = styled.button<{ color: string; bg: string }>`
  position: relative;
  padding: 10px 80px;
  color: #fff;
  outline: none;
  border: none;
  font-size: 18px;
  height: 40px;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${({ color }) =>
    color === 'primary' ? '#1976d2' : '#1fd123'};
  background-image: ${({ bg }) => `url(${bg})`};
  background-repeat: no-repeat;
  background-position: center;
  transition: background 0.1s linear;
  &:hover {
    background-color: #60ce16;
  }
`

const StyledError = styled.div`
  position: absolute;
  top: -20px;
  color: red;
  padding-left: 10px;
`

const FormError = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 15px;
  width: 330px;
  color: red;
  font-weight: 600;
  text-align: center;
`

const LabelLink = styled(Link)`
  justify-self: center;
  text-decoration: none;
`

export default SignUp
