import React, { Fragment, useState, useEffect } from "react";

//Actions
import { GetDestinations } from "../actions/dataActions";

import axios from "axios";

//Components
import Navbar from "../components/Navbar";
import DestinationCard from "../components/DestinationCard";

//Styled Components
import { Wrapper, GlobalContainer, Card } from "../styles/Layout";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
	icon: {
		marginRight: theme.spacing(2)
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6)
	},
	heroButtons: {
		marginTop: theme.spacing(4)
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8)
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	cardMedia: {
		paddingTop: "56.25%" // 16:9
	},
	cardContent: {
		flexGrow: 1
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6)
	}
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
	const classes = useStyles();
	const [data, setData] = useState();

	useEffect(() => {
		axios
			.get("/api/destinations")
			.then(res => {
				setData({ data: res.data });
				console.log(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<Fragment>
			<CssBaseline />
			<GlobalContainer>
				<Navbar />
				<main>
					{/* Hero unit */}
					<div className={classes.heroContent}>
						<Container maxWidth='sm'>
							<Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
								Album layout
							</Typography>
							<Typography variant='h5' align='center' color='textSecondary' paragraph>
								Something short and leading about the collection below—its contents, the creator, etc.
								Make it short and sweet, but not too short so folks don&apos;t simply skip over it
								entirely.
							</Typography>
							<div className={classes.heroButtons}>
								<Grid container spacing={2} justify='center'>
									<Grid item>
										<Button variant='contained' color='primary'>
											Main call to action
										</Button>
									</Grid>
									<Grid item>
										<Button variant='outlined' color='primary'>
											Secondary action
										</Button>
									</Grid>
								</Grid>
							</div>
						</Container>
					</div>
					<Container className={classes.cardGrid} maxWidth='md'>
						{/* End hero unit */}
						{console.log(data)}
						<Grid container spacing={4}>
							{cards.map(card => (
								<DestinationCard key={card} />
							))}
						</Grid>
					</Container>
				</main>
			</GlobalContainer>
		</Fragment>
	);
}
