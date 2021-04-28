import { useHistory } from 'react-router'
import { FormikErrors, useFormik, FormikValues } from 'formik'
import styled from 'styled-components'
import arrow from '../images/right.svg'
import { FC } from 'react'
import { setItem } from '../utils'
import { useActions } from '../hooks/useActions'

type User = {
	email: string
	password: string
}

const AuthPage: FC = () => {
	const history = useHistory()

	const { setUser } = useActions()

	const validate = (values: User) => {
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

	const { errors, handleSubmit, handleChange, values } = useFormik({
		initialValues: { email: '', password: '' },
		validate,
		onSubmit: values => {
			setItem('user', JSON.stringify(values))
			setUser(values)
			history.push('/')
		},
	})

	return (
		<Container>
			<Title>Log in</Title>
			<Form onSubmit={handleSubmit}>
				<FieldWrapper>
					{errors.email ? <Error>{errors.email}</Error> : null}
					<Input
						placeholder='Type your email'
						onChange={handleChange}
						value={values.email}
						id='email'
						type='email'
						name='email'
					/>
				</FieldWrapper>
				<FieldWrapper>
					{errors.password ? <Error>{errors.password}</Error> : null}
					<Input
						placeholder='Type your password'
						onChange={handleChange}
						value={values.password}
						id='password'
						type='password'
						name='password'
					/>
				</FieldWrapper>

				<WrapperButton>
					<StyledButton id='submit' bg={arrow} type='submit' color='primary' />
				</WrapperButton>
			</Form>
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

const Form = styled.form`
	padding: 20px 10px;
`

const Input = styled.input`
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
	background-color: ${({ color }) => (color === 'primary' ? '#1976d2' : '#1fd123')};
	background-image: ${({ bg }) => `url(${bg})`};
	background-repeat: no-repeat;
	background-position: center;
	transition: background 0.1s linear;
	&:hover {
		background-color: #1560ac;
	}
`

const Error = styled.div`
	position: absolute;
	top: -20px;
	color: red;
	padding-left: 10px;
`

export default AuthPage
