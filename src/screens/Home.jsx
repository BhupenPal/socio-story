import React, { Fragment } from "react";
import { withStyles, AppBar, Toolbar, Typography, Button, Grid, Box } from "@material-ui/core";
import styles from '../assets/material/Home'
import Star from '../assets/img/star.png'
import Ribbon from '../assets/img/Ribbon.png'

const Home = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      {/* Header Element */}
      <AppBar position="static">
        <Toolbar className={classes.HeaderFlex}>
          <a href="/">
            <Typography className={classes.Logo} variant='h3' style={{ fontWeight: 600 }}>SocioStory</Typography>
          </a>
          <div className={classes.HeaderMenu}>
            <a href=""><Button>Event Details</Button></a>
            <a href=""><Button>About Us</Button></a>
            <a href=""><Button style={{ backgroundColor: '#31A297', marginLeft: 20 }}>Register Here</Button></a>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Box */}
      <Grid container className={classes.HeroBox}>
        <Grid item>
          <img src={Star} />
          <Typography variant='h2' className={classes.HeroHeading}>LEADERS</Typography>
          <Typography className={classes.HeroText}>FOR SOCIAL CHANGE</Typography>
          <img src={Ribbon} alt="Sustainable Ribbon Text" className={classes.Ribbon} />
        </Grid>
      </Grid>

      {/* Purpose Box */}
      <Grid item className={classes.LightBG}>
        <Typography variant='h2' align='center'>Purpose</Typography>
        <Box width="45%">
          <Typography align='center' variant='body1' className={classes.TextMargin}>Sociostory aims to build a community to drive sustainable social change in india</Typography>
          <Typography align='center' variant='body1'>Through our platform, we aim to highlight the stories of corporate changemakers, non-profit organizations, and individuals whose initiatives are aligned to the Sustainable Development Goals (SDGs) and have impacted lives beyond the lifecycle of their project interventions.</Typography>
        </Box>
      </Grid>

      {/* Joing Leaders */}
      <Grid container className={classes.DarkBG}>
        <Grid item xs={12}>
          <Typography>Join the impact leaders</Typography>
        </Grid>
      </Grid>

      {/* Event Details */}
      <Grid container className={classes.LightBG}>
        <Grid item xs={12}>
          <Typography variant='h2'>Event Details</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' align='center'>SocioStory is invites changemakers to share their impacts stories</Typography>
          <Typography variant='body2' align='center'>Round 1 - Online Event</Typography>
        </Grid>
      </Grid>

      {/* Why Nominate */}
      <Grid container className={classes.DarkBG}>
        <Grid item xs={12}>
          <Typography>Why to Nominate?</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Join the community of Indian corporate leaders, development organizations, and socially inclined individuals to drive the Indian economy towards a sustainable tomorrow.</Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(Home);