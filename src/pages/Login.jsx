import React from "react";

//Actions
import { useLoginForm } from "../actions/userActions";

//Components
import ThemeSwitcher from "../components/ThemeSwitcher";

//Styled Components
import { Row, Col } from "reactstrap";
import { Wrapper, ConnectionContainer, Card } from "../styles/Layout";
import { SignForm } from "../styles/ConnectionPages";

//React Router
import { Link as Redirect } from "react-router-dom";

const Login = props => {
	const { inputs, handleInputChange, handleSubmit } = useLoginForm(
		{ email: "", password: "", errors: {}, loading: false },
		props
	);

	return (
		<Wrapper>
			<ConnectionContainer>
				<Row>
					<Col sm={9} md={7} lg={5} className='mx-auto'>
						<Card className=' my-5'>
							<SignForm className='signup-form'>
								<form onSubmit={handleSubmit} autoComplete='off'>
									<h2>Login</h2>
									<p className='hint-text'>Welcome back. Glad to see you again !</p>
									<div className='form-group'>
										<input
											className='form-control'
											type='email'
											name='email'
											id='email'
											onChange={handleInputChange}
											value={inputs.email}
											placeholder='Email'
											required='required'
										/>
									</div>
									<div className='form-group'>
										<input
											className='form-control'
											type='password'
											name='password'
											id='password'
											onChange={handleInputChange}
											value={inputs.password}
											placeholder='Password'
											required='required'
										/>
									</div>
									<div className='form-group'>
										<label className='checkbox-inline'>
											<input type='checkbox' /> Remember me
										</label>
									</div>
									<div className='form-group'>
										<button type='submit' className='btn btn-success btn-lg btn-block'>
											Login
										</button>
									</div>
								</form>
								<div className='text-center mb-3'>
									Don't have an account yet ? <Redirect to='/signup'> Join us</Redirect>
								</div>
							</SignForm>
						</Card>
					</Col>
				</Row>

				<ThemeSwitcher />
			</ConnectionContainer>
		</Wrapper>
	);
};

//Connect pass the State and Actions to Props
export default Login;
