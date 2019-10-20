import React from "react";

//Actions
import { useSignupForm } from "../actions/userActions";

//Components
import ThemeSwitcher from "../components/ThemeSwitcher";

//Styled Components
import { Row, Col } from "reactstrap";
import { Wrapper, ConnectionContainer, Card } from "../styles/Layout";

//React Router
import { Link as Redirect } from "react-router-dom";

const Signup = props => {
	const { inputs, handleInputChange, handleSubmit } = useSignupForm(
		{
			email: "",
			handle: "",
			firstName: "",
			lastName: "",
			password: "",
			confirmPassword: "",
			errors: {},
			loading: false
		},
		props
	);

	return (
		<Wrapper>
			<ConnectionContainer>
				<Row>
					<Col sm={9} md={7} lg={5} className='mx-auto'>
						<Card className='my-5'>
							<div className='signup-form'>
								<form onSubmit={handleSubmit} autoComplete='off'>
									<h2>Register</h2>
									<p className='hint-text'>Create your account. It's free and only takes a minute.</p>
									<div className='form-group'>
										<div className='row mx-0'>
											<div className='col-xs-6 w-50 pr-3'>
												<input
													className='form-control'
													type='text'
													name='firstName'
													id='firstName'
													onChange={handleInputChange}
													value={inputs.firstName}
													placeholder='First Name'
													required='required'
												/>
											</div>
											<div className='col-xs-6 w-50 pl-3'>
												<input
													className='form-control'
													type='text'
													name='lastName'
													id='lastName'
													onChange={handleInputChange}
													value={inputs.lastName}
													placeholder='Last Name'
													required='required'
												/>
											</div>
										</div>
									</div>
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
											type='text'
											name='handle'
											id='handle'
											onChange={handleInputChange}
											value={inputs.handle}
											placeholder='Username'
											required='required'
										/>
									</div>
									<div className='row mx-0 mb-4'>
										<div className='col-xs-6 w-50 pr-3'>
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
										<div className='col-xs-6 w-50 pl-3'>
											<input
												className='form-control'
												type='password'
												name='confirmPassword'
												id='confirmPassword'
												onChange={handleInputChange}
												value={inputs.confirmPassword}
												placeholder='Confirm'
												required='required'
											/>
										</div>
									</div>
									<div className='form-group'>
										<button type='submit' className='btn btn-success btn-lg btn-block'>
											Register Now
										</button>
									</div>
								</form>
								<div className='text-center mb-3'>
									Already have an account? <Redirect to='/login'> Login</Redirect>
								</div>
							</div>
						</Card>
					</Col>
				</Row>

				<ThemeSwitcher />
			</ConnectionContainer>
		</Wrapper>
	);
};

export default Signup;
