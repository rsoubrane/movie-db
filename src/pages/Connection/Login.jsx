import React, { Fragment } from "react";

//Actions
import { useLoginForm } from "../../actions/userActions";

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

const Login = props => {
	const classes = props.classes;

	const { inputs, handleInputChange, handleSubmit } = useLoginForm(
		{
			email: "",
			password: "",
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
				<FormControl fullWidth>
					<FormControlLabel
						control={<Checkbox value='checkedC' className={classes.checkbox} />}
						label='Remember Me'
						classes={{
							label: classes.checkboxLabel
						}}
					/>
				</FormControl>
				<FormControl margin={"normal"} fullWidth>
					<Button
						type='submit'
						classes={{ label: classes.buttonLabel }}
						fullWidth
						variant={"contained"}
						color={"primary"}>
						Log in
					</Button>
				</FormControl>
				<Hidden smUp>
					<div className={classes.bottomSignUp}>
						<Typography className={classes.grey}>
							Not a member ?
							<Redirect to='/signup' className={classes.mlNormal}>
								Sign Up Now
							</Redirect>
						</Typography>
					</div>
				</Hidden>
				<div className={classes.forgetPassword}>
					<Typography color={"inherit"}>
						<Link color={"inherit"}>Forget your password ?</Link>
					</Typography>
				</div>
			</form>
		</Fragment>
	);
};

export default withStyles(connectionStyles)(Login);
