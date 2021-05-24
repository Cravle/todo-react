import { FC } from 'react'
import { useHistory } from 'react-router'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core'

import useActions from '@hooks//useActions'
import { getError } from '@selectors//user'
import { loginValidation } from '@utils//'

import arrow from '../images/right.svg'

const AuthPage: FC = () => {
  const history = useHistory()

  const error: string = useSelector(getError)

  const { loginRequest, setError } = useActions()

  return (
    <Container>
      <Title>Log in</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={loginValidation}
        onSubmit={(values) => {
          setError('')
          loginRequest(values, history)
        }}
      >
        {(formik) => (
          <StyledForm onSubmit={formik.handleSubmit}>
            <FormError>{error}</FormError>
            <FieldWrapper>
              <ErrorMessage component={StyledError} name="email" />
              <Input placeholder="Type your email" type="email" name="email" />
            </FieldWrapper>

            <FieldWrapper>
              <Input
                placeholder="Type your password"
                type="password"
                name="password"
              />
            </FieldWrapper>

            <WrapperButton>
              <StyledButton
                variant="contained"
                bg={arrow}
                type="submit"
                color="primary"
              />
            </WrapperButton>
          </StyledForm>
        )}
      </Formik>

      <LabelLink to="/register">Not registered? Create account.</LabelLink>
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
  position: relative;
`

const Input = styled(Field)`
  height: 30px;
  width: 300px;
  padding: 5px;
  margin-top: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 10px;
`

const StyledButton = styled(Button)<{ bg: string }>`
  margin: 25px 0 !important;
  position: relative;
  padding: 10px 80px !important;
  color: #fff;
  outline: none;
  border: none;
  font-size: 18px;
  height: 40px;
  width: 60px;
  cursor: pointer;
  border-radius: 20px !important;
  background-image: ${({ bg }) => `url(${bg})`};
  background-repeat: no-repeat;
  background-position: center;
`

const StyledError = styled.div`
  position: absolute;
  top: -15px;
  color: red;
  padding-left: 10px;
`

const FormError = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-weight: 600;
  text-align: center;
`

const LabelLink = styled(Link)`
  justify-self: center;
  text-decoration: none;
`

export default AuthPage
