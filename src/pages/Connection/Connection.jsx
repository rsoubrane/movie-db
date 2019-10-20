/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid,react/no-unescaped-entities */
import React from "react";

//Components
import Login from "./Login";
import Signup from "./Signup";

//MUI
import { Link, Icon, Toolbar, AppBar, Typography, Button, Hidden } from "@material-ui/core";

//Styles
import { connectionStyles, Root, Backdrop, Grid } from "./Styles";
import { withStyles } from "@material-ui/core/styles";

const Connection = props => {
	const classes = props.classes;
	const currentLocation = window.location.pathname;

	return (
		<Root>
			<Backdrop />
			<Grid container justify={"center"}>
				<AppBar className={classes.appBar} position={"absolute"} elevation={0}>
					<Toolbar className={classes.toolbar}>
						<Grid container>
							<Grid item xs container alignItems={"center"}>
								<Icon className={classes.grey}>arrow_left</Icon>
								<Typography className={classes.grey}>
									<Link color={"inherit"} href={"/"} underline={"none"}>
										Back to Home
									</Link>
								</Typography>
							</Grid>
							<Grid item xs container>
								<img
									alt={"logo"}
									className={classes.logo}
									src={
										"https://world2cover.com.au/assets/brands/w2c/logo-icon-f15d330e1176082c699f4713f50df2c725145889cbe20d43d3386e55ee458f50.png"
									}
								/>
							</Grid>
							<Hidden only={"xs"}>
								<Grid xs item container alignItems={"center"} justify={"flex-end"}>
									<Typography className={classes.grey}>Not a member?</Typography>{" "}
									<Button
										classes={{ label: classes.buttonLabel }}
										className={classes.mlNormal}
										color={"secondary"}>
										Sign Up
									</Button>
								</Grid>
							</Hidden>
						</Grid>
					</Toolbar>
				</AppBar>
				<Grid className={classes.content} item xs={12} sm={6} md={5} lg={4} container alignItems={"center"}>
					{currentLocation === "/login" ? <Login {...props} /> : <Signup {...props} />}
				</Grid>
			</Grid>
		</Root>
	);
};

export default withStyles(connectionStyles)(Connection);
