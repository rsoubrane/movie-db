import React, { useState, Fragment } from "react";
import {
	Collapse,
	Navbar as NavbarContainer,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem
} from "reactstrap";

//Actions
import { logoutUser } from "../actions/userActions";

//Components
import AuthRoute from "../utils/AuthRoute";
import ThemeSwitcher from "./ThemeSwitcher";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//Styled Components
import { Wrapper, DropdownMenu, NavLink, DropNavLink } from "../styles/Layout";

const Navbar = props => {
	const mode = localStorage.getItem("themeMode");
	const [token, setToken] = useState(localStorage.FBIdToken);

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const logoutUser = props => {
		// localStorage.removeItem("FBIdToken");
	};

	return (
		<header className='masthead mb-auto'>
			<NavbarContainer className={`navbar-${mode} bg-${mode}`} expand='md'>
				<NavbarBrand href='/'>MovieZ</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink href='/movies/'>Movies</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/series/'>Series</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								<FontAwesomeIcon icon={faUser} />
							</DropdownToggle>
							<DropdownMenu right>
								{token ? (
									<Fragment>
										<DropdownItem>
											<NavLink href='/'>Profile</NavLink>
										</DropdownItem>
										<DropdownItem divider />
										<DropdownItem onClick={logoutUser()}>
											<NavLink href='/'>Logout</NavLink>
										</DropdownItem>
									</Fragment>
								) : (
									<Fragment>
										<DropdownItem>
											<NavLink href='/login'>Login</NavLink>
										</DropdownItem>
										<DropdownItem divider />
										<DropdownItem>
											<NavLink href='/signup'>Signup</NavLink>
										</DropdownItem>
									</Fragment>
								)}
								<DropdownItem divider />
								<DropdownItem>
									<ThemeSwitcher />
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</NavbarContainer>
		</header>
	);
};

export default Navbar;
