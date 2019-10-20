import { useState } from "react";

//React Router
import Redirect from "react-router-dom";

//Utils
import axios from "axios";

//Logic to log the user in
export const useLoginForm = (initialValues, props) => {
	const [inputs, setInputs] = useState(initialValues);
	const handleSubmit = event => {
		if (event) event.preventDefault();
		const userData = {
			email: inputs.email,
			password: inputs.password
		};
		axios
			.post("/api/login", userData)
			.then(res => {
				setAuthorizationHeader(res.data.token);
				props.history.push("/");
			})
			.catch(err => console.log(err));
	};
	const handleInputChange = event => {
		event.persist();
		setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
	};
	return {
		handleSubmit,
		handleInputChange,
		inputs
	};
};

//Logic to sign the user up
export const useSignupForm = (initialValues, props) => {
	const [inputs, setInputs] = useState(initialValues);
	const handleSubmit = event => {
		if (event) event.preventDefault();
		const userData = {
			handle: inputs.handle,
			email: inputs.email,
			password: inputs.password,
			confirmPassword: inputs.confirmPassword
		};
		console.log(userData);
		axios
			.post("/api/signup", userData)
			.then(res => {
				setAuthorizationHeader(res.data.token);
				props.history.push("/");
			})
			.catch(err => console.log(err));
	};
	const handleInputChange = event => {
		event.persist();
		setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
	};
	return {
		handleSubmit,
		handleInputChange,
		inputs
	};
};

// Log the user out
export const logoutUser = () => {
	console.log("FUCKED THAT");
	// localStorage.removeItem("FBIdToken");
	// delete axios.defaults.headers.common["Authorization"];
};

//Set Authorization Headers
const setAuthorizationHeader = token => {
	localStorage.setItem("FBIdToken", token);
	axios.defaults.headers.common["Authorization"] = token;
};
