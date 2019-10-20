import React, { Fragment } from "react";

//Actions
import { useSignupForm } from "../../actions/userActions";

//MUI
import { withStyles } from "@material-ui/core/styles";
import {
	Link,
	Typography,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	TextField,
	Hidden
} from "@material-ui/core";

//React Router
import { Link as Redirect } from "react-router-dom";

//Styles
import { connectionStyles } from "./Styles";

const Signup = props => {
	const classes = props.classes;

	const { inputs, handleInputChange, handleSubmit } = useSignupForm(
		{
			email: "",
			handle: "",
			password: "",
			confirmPassword: "",
			errors: {},
			loading: false
		},
		props
	);

	return (
		<Fragment>
			<form onSubmit={handleSubmit} autoComplete='off'>
				<TextField
					fullWidth
					type='email'
					name='email'
					id='email'
					required
					onChange={handleInputChange}
					value={inputs.email}
					label={"E-mail address"}
					margin={"normal"}
					variant='filled'
					InputLabelProps={{
						classes: {
							root: classes.inputLabel,
							focused: classes.focused
						}
					}}
					InputProps={{
						classes: {
							root: classes.input,
							focused: classes.focused,
							underline: classes.underline,
							input: classes.inputInput
						}
					}}
				/>
				<TextField
					fullWidth
					type='text'
					name='handle'
					id='handle'
					required
					onChange={handleInputChange}
					value={inputs.handle}
					label={"Username"}
					margin={"normal"}
					variant='filled'
					InputLabelProps={{
						classes: {
							root: classes.inputLabel,
							focused: classes.focused
						}
					}}
					InputProps={{
						classes: {
							root: classes.input,
							focused: classes.focused,
							underline: classes.underline,
							input: classes.inputInput
						}
					}}
				/>
				<TextField
					fullWidth
					type='password'
					name='password'
					id='password'
					required
					onChange={handleInputChange}
					value={inputs.password}
					label={"Password"}
					margin={"normal"}
					variant='filled'
					InputLabelProps={{
						classes: {
							root: classes.inputLabel,
							focused: classes.focused
						}
					}}
					InputProps={{
						classes: {
							root: classes.input,
							focused: classes.focused,
							underline: classes.underline,
							input: classes.inputInput
						}
					}}
				/>
				<TextField
					fullWidth
					type='password'
					name='confirmPassword'
					id='confirmPassword'
					required
					onChange={handleInputChange}
					value={inputs.confirmPassword}
					label={"Confirm Password"}
					margin={"normal"}
					variant='filled'
					InputLabelProps={{
						classes: {
							root: classes.inputLabel,
							focused: classes.focused
						}
					}}
					InputProps={{
						classes: {
							root: classes.input,
							focused: classes.focused,
							underline: classes.underline,
							input: classes.inputInput
						}
					}}
				/>
				<FormControl margin={"normal"} fullWidth>
					<Button
						type='submit'
						classes={{ label: classes.buttonLabel }}
						fullWidth
						variant={"contained"}
						color={"primary"}>
						Sign up
					</Button>
				</FormControl>
				<Hidden smUp>
					<div className={classes.bottomSignUp}>
						<Typography className={classes.grey}>
							Already a member ?
							<Redirect to='/signup' className={classes.mlNormal}>
								Log In Now
							</Redirect>
						</Typography>
					</div>
				</Hidden>
			</form>
		</Fragment>
	);
};

export default withStyles(connectionStyles)(Signup);
