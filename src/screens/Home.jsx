import React, { Fragment } from "react";
import { withStyles, AppBar, Toolbar, Typography, Button, Grid, Box, CardContent, Card, CardMedia } from "@material-ui/core";
import styles from '../assets/material/Home'
import Star from '../assets/img/star.png'
import Ribbon from '../assets/img/Ribbon.png'
import Slider from "react-slick";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import ShoutForHelp from '../assets/img/Previous Participants/Shout for Help.png'
import ExtraMarks from '../assets/img/Previous Participants/Extramarks.png'
import GoIbibo from '../assets/img/Previous Participants/goibibo.png'
import Gooric from '../assets/img/Previous Participants/Gooric.png'
import Havells from '../assets/img/Previous Participants/Havells.png'
import IITD from '../assets/img/Previous Participants/IIT Delhi.png'
import KhabarLehriya from '../assets/img/Previous Participants/Khabar Lehriya.png'
import MakeMyTrip from '../assets/img/Previous Participants/MakeMyTrip.png'
import Moodys from '../assets/img/Previous Participants/Moodys.png'
import SparkMinda from '../assets/img/Previous Participants/Spark Minda.png'
import TimesGroup from '../assets/img/Previous Participants/The Times Group.png'
import Woxsen from '../assets/img/Previous Participants/Woxsen.png'

import PastEvent1 from '../assets/img/Past Events/1.png'
import PastEvent2 from '../assets/img/Past Events/2.png'
import PastEvent3 from '../assets/img/Past Events/3.png'

const Home = (props) => {
  const { classes } = props;

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVF6LM3b4cDNx7FXDj4XSOztYTY0Kuw3npY_q7dm8mOxO8VA/viewform?usp=send_form"><Button style={{ backgroundColor: '#31A297', marginLeft: 20 }}>Register Here</Button></a>
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
        <Grid container>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Typography align='center' variant='body1' className={classes.TextMargin}>Sociostory aims to build a community to drive sustainable social change in India</Typography>
            <Typography align='center' variant='body1'>
              Through our platform, we aim to highlight the stories
              of corporate changemakers, non-profit organizations, and individuals whose initiatives are aligned
              to the Sustainable Development Goals (SDGs) and have impacted lives beyond
          the lifecycle of their project interventions.</Typography>
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>
        {/* <Box width="45%">
          
        </Box> */}
      </Grid>

      {/* Joing Leaders */}
      <Grid container className={classes.DarkBG} spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h2' align='center' style={{marginBottom : 80}}>Join the Impact Leaders</Typography>
          <Slider {...settings}>
            <div style={{ width: '100%' }}>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </Grid>
      </Grid>

      {/* Event Details */}
      <Grid container className={classes.LightBG} id="event">
        <Grid item xs={12}>
          <Typography variant='h2' style={{marginBottom : 80}}>Event Details</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' align='center'>SocioStory is invites changemakers to share their impacts stories</Typography>
          <Typography variant='body2' align='center'>Round 1 - Online Event</Typography>
        </Grid>
        <Grid item xs={12}>
          {/* {stepper} */}
          {/* Timeline seems better option here */}
        </Grid>
      </Grid>

      {/* Why Nominate */}
      <Grid container className={classes.DarkBG} id="whyto">
        <Grid item xs={8} style={{marginBottom : 80}}>
          <Typography variant='h2'>Why to Nominate?</Typography>
        </Grid>
        <Grid item xs={10} sm={8}>
          <Typography>Join the community of Indian corporate leaders, development organizations, and socially inclined individuals to drive the Indian economy towards a sustainable tomorrow.</Typography>
        </Grid>
        <Grid container item spacing={3} justify="center">
          <Grid item xs={false} sm={2}></Grid>

          <Grid item xs={10} sm={8}>
            <Typography variant='h3' style={{ paddingTop: 40, paddingBottom: 20, fontWeight: 600 }}>Use our platform to:</Typography>
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={10} sm={5} lg={2}>
            <Card className={classes.purpose} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 10, paddingRight: 10 }}>
              <img src="../src/assets/img/award.png" alt="" />
              <CardContent>
                <Typography style={{ fontWeight: 600, marginBottom: 160 }}>
                  Get National Recognition
                </Typography>
                <Typography variant='h5'>
                  through our media partners
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={5} lg={2}>
            <Card className={classes.purpose} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 2, paddingRight: 2 }}>
              <img src="../src/assets/img/chotastart.png" alt="" />
              <CardContent>
                <Typography style={{ fontWeight: 600, marginBottom: 80 }}>
                  Become a role model for others in your industry
                </Typography>
                <Typography variant='h5'>
                  and be known among the public as a Socially Responsible Organisation
                </Typography>
              </CardContent>
            </Card></Grid>
          <Grid item xs={10} sm={5} lg={2}>
            <Card className={classes.purpose} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 10, paddingRight: 10 }}>
              <img src="../src/assets/img/tick.png" alt="" />
              <CardContent>
                <Typography style={{ fontWeight: 600, marginBottom: 160 }}>
                  Share your impact stories
                </Typography>
                <Typography variant='h5'>
                  with the larger audience at our platform
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={5} lg={2}>
            <Card className={classes.purpose} style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 10, paddingRight: 10 }}>
              <img src="../src/assets/img/global.png" alt="" />
              <CardContent>
                <Typography style={{ fontWeight: 600, marginBottom: 90 }}>
                  Network and Collaborate with different stakeholders
                </Typography>
                <Typography variant='h5'>
                  working on improving lives at grassroots
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={false} sm={2}></Grid> */}
        </Grid>
      </Grid>

      {/* Nominate area */}
      <Grid container className={classes.LightBG} spacing={2} justify="center" id="nomination">
        <Grid item xs={8}>
          <Typography variant='h2'style={{marginBottom : 80}}>Nomination Areas</Typography>
        </Grid>
        <Grid container item spacing={4} style={{ marginBottom: 80 }} justify="center">
          <Grid item xs={10} sm={5} lg={2}>
            <Card className={classes.nomination} style={{ background: '#4EA348' }}>
              <img src="../src/assets/img/heart.png" alt="" />
              <CardContent>
                <Typography>GOOD HEALTH AND WELL BEING</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={5} lg={2}>
            <Card className={classes.nomination} style={{ background: '#28BFE6' }}>
              <img src="../src/assets/img/water.png" alt="" />
              <CardContent>
                <Typography>CLEAN WATER AND SANITATION</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={5} lg={2}>
            <Card className={classes.nomination} style={{ background: '#C7212F' }}>
              <img src="../src/assets/img/educatioin.png" alt="" />
              <CardContent>
                <Typography>QUALITY EDUCATION</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={5} lg={2}>
            <Card className={classes.nomination} style={{ background: '#A31D44' }}>
              <img src="../src/assets/img/bar.png" alt="" />
              <CardContent>
                <Typography>DECENT WORK AND ECONOMIC GROWTH</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container item spacing={4} justify="center">
          <Grid item xs={10} sm={3} lg={2}>
            <Card className={classes.nomination} style={{ background: '#EE402D' }}>
              <img src="../src/assets/img/gender.png" alt="" />
              <CardContent>
                <Typography>GENDER EQUALITY</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={4} lg={2}>
            <Card className={classes.nomination} style={{ background: '#BF8D2C' }}>
              <img src="../src/assets/img/infinity.png" alt="" />
              <CardContent>
                <Typography>RESPONSIBLE CONSUMPTION AND PRODUCTION</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={3} lg={2}>
            <Card className={classes.nomination} style={{ background: '#407F46' }}>
              <img src="../src/assets/img/earth.png" alt="" />
              <CardContent>
                <Typography>CLIMATE ACTION</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Who nominated */}
      <Grid container className={classes.DarkBG}>
        <Grid xs={2}></Grid>
        <Grid item xs={8}>
          <Typography variant='h2' style={{marginBottom : 80}}>Who can be Nominated</Typography>
        </Grid>
        <Grid xs={2}></Grid>
        <Grid xs={2}></Grid>
        <Grid item xs={8}>
          <Typography>A company can nominate two of its CSR Projects executed in the last 12-18 months or can nominate an NGO partner’s project.</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>An NGO can nominate their high impact social project.</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>An Individual can nominate their project if they are working on the ground with an NGO or directly with the community to bring a positive change in their lives </Typography>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>


      <Grid container className={classes.LightBG} spacing={2} justify="center">
        <Grid item xs={8}>
          <Typography variant='h2'>Nominate your Impact Story</Typography>
        </Grid>
        <Grid item xs={8}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVF6LM3b4cDNx7FXDj4XSOztYTY0Kuw3npY_q7dm8mOxO8VA/viewform?usp=send_form">
            <Button style={{ background: '#222753', marginTop: 80 }}>Share the story details here</Button>
          </a>
        </Grid>
        <Grid item xs={8}>
          <Typography>Nomination Fees</Typography>
        </Grid>
        <Grid container item spacing={3} justify="center">
          <Grid item xs={10} sm={4}>
            <Card className={classes.impact}>
              <CardContent>
                <Typography style={{ marginBottom: 60 }}>One Story</Typography>
                <Typography variant='h5'>Rs 8000 + taxes</Typography>

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={4}>
            <Card className={classes.impact}>
              <CardContent>
                <Typography style={{ marginBottom: 60 }}>Two stories</Typography>
                <Typography variant='h5'>Rs 15000 + taxes</Typography>

              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={10}>
          <Typography>Details of round 1</Typography>
        </Grid>

        <Grid item container justify="center">
          <Grid item xs={10} lg={4} className={classes.impact_details}>
            <img src="../src/assets/img/virtual.png" style={{ paddingRight: 20 }}></img>
            <Typography>Mode: Virtual</Typography>
          </Grid>
          <Grid item xs={10} lg={4} className={classes.impact_details}>
            <img src="../src/assets/img/calender.png" style={{ paddingRight: 20 }}></img>
            <Typography>Date: August 22, 2020</Typography>
          </Grid>
        </Grid>
        <Grid item container justify="center">
          <Grid item xs={10} lg={4} className={classes.impact_details}>
            <img src="../src/assets/img/tick2.png" style={{ paddingRight: 20 }}></img>
            <Typography>Duration: 90 minutes </Typography>
          </Grid>
          <Grid item xs={10} lg={4} className={classes.impact_details}>
            <img src="../src/assets/img/clock.png" style={{ paddingRight: 20 }}></img>
            <Typography> Time: 1600 hrs</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.DarkBG} justify="center" id="about">
        <Grid item xs={10} style={{marginBottom : 80}}>
          <Typography variant='h2'>About SocioStory</Typography>
        </Grid>
        <Grid item container justify="center" spacing={2} style={{ paddingBottom: 40 }}>
          <Grid item xs={10} sm={5}>
            <Typography>
              Sociostory is a social community platform that aims at recognizing the hardwork of social workers all across the globe.
        </Typography>
          </Grid>
          <Grid item xs={10} sm={5}>
            <Card style={{ background: '#C4C4C4', height: '100%', width: '80%', borderRadius: 10 }}>
            </Card>
          </Grid>
        </Grid>
        <Grid item container justify="center" style={{ paddingBottom: 40, height: 200 }}>
          <Grid item xs={10} sm={5}>
            <Typography>
              Founded in 2018, SocioStory envisions to tell 10,000 stories to change by 2025.
        </Typography>
          </Grid>
          <Grid item xs={10} sm={5}>
            <Card style={{ background: '#C4C4C4', height: '100%', width: '80%', borderRadius: 10 }}>
            </Card>
          </Grid>
        </Grid>

      </Grid>

      <Grid container justify="center" className={classes.WhiteBG}>
        <Typography variant="h2" style={{marginBottom : 80}}>
          SocioStory in News
      </Typography>
        <Grid item container className='news-container'>
          <img src="../src/assets/img/business.png" alt="" />
          <img src="../src/assets/img/story.png" alt="" />
          <img src="../src/assets/img/rvcj.png" alt="" />
          <img src="../src/assets/img/marketing.png" alt="" />
          <img src="../src/assets/img/news18.png" alt="" />
          <img src="../src/assets/img/navbharat.png" alt="" />
          <img src="../src/assets/img/zeenews.png" alt="" />
        </Grid>
      </Grid>

      {/* Jury section */}
      <Grid container className={classes.DarkBG} justify="center">
        <Grid item xs={8} style={{ marginBottom: 80 }}>
          <Typography variant='h2' style={{marginBottom : 80}}>
            Jury Members
         </Typography>
        </Grid>
        <Grid item container justify="center" style={{ marginBottom: 70 }}>
          <Grid item xs={10} sm={3} >
            <Card className={classes.jury}>
              <img src="../src/assets/img/jury1.png"></img>
              <CardContent className={classes.jury}>
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                  Manipadma Datta
             </Typography>
                <Typography variant='h5'>
                  Vice Chancellor
             </Typography>
                <Typography variant='h5'>
                  TERI University
             </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={4}>
            <Card className={classes.jury}>
              <img src="../src/assets/img/jury2.png"></img>
              <CardContent className={classes.jury}>
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                  Mr Prashant Rakesh Chauhan
             </Typography>
                <Typography variant='h5'>
                  Assistant Professor
             </Typography>
                <Typography variant='h5'>
                  Amity Institute of Social Sciences
             </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={3}>
            <Card className={classes.jury}>
              <img src="../src/assets/img/jury3.png"></img>
              <CardContent className={classes.jury}>
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                  Dr Seema Sharma
             </Typography>
                <Typography variant='h5'>
                  Head of Department
             </Typography>
                <Typography variant='h5'>
                  IIT Delhi
             </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={8} style={{ marginBottom: 50 }}>
          <Typography variant='h2'>
            Event Mentors
         </Typography>
        </Grid>
        <Grid item container justify="center">
          <Grid item xs={10} sm={3} >
            <Card className={classes.jury}>
              <img src="../src/assets/img/jury4.png"></img>
              <CardContent className={classes.jury}>
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                  Dr. Anil Prakash Joshi
             </Typography>
                <Typography variant='h5'>
                  Padma Bhushan
             </Typography>
                <Typography variant='h5'>
                  & Environmentalist
             </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={3} >
            <Card className={classes.jury}>
              <img src="../src/assets/img/jury5.png"></img>
              <CardContent className={classes.jury}>
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                  Yashveer Singh
             </Typography>
                <Typography variant='h5'>
                  Executive Director, Ashoka
             </Typography>
                <Typography variant='h5'>
                  Young Changemaker
             </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.LightBG} id="past">
        <Typography variant='h2' style={{marginBottom : 80}}>Past Events</Typography>
        <Typography>Our Flagship event has been attended by some of the top leaders, social changemakers and CSR leaders</Typography>
        <Grid container className='past-container'>
          <img src={PastEvent1} alt="" />
          <img src={PastEvent2} alt="" />
          <img src={PastEvent3} alt="" />
        </Grid>
      </Grid>
      <Grid container className={classes.WhiteBG} id="previous">
        <Typography align='center' variant='h2' style={{marginBottom : 80}}>Previous Participants</Typography>
        <Grid container className='participants-container'>
          <img src={ShoutForHelp} alt="" />
          <img src={Moodys} alt="" />
          <img src={Gooric} alt="" />
          <img src={Havells} alt="" />
          <img src={GoIbibo} alt="" />
          <img src={Woxsen} alt="" />
          <img src={SparkMinda} alt="" />
          <img src={TimesGroup} alt="" />
          <img src={MakeMyTrip} alt="" />
          <img src={KhabarLehriya} alt="" />
          <img src={ExtraMarks} alt="" />
          <img src={IITD} alt="" />
        </Grid>
      </Grid>
      <Grid container className={classes.DarkBG}>
        <Grid container justify='center'>
          <Grid item xs={12} md={3} style={{textAlign : 'center'}}>
            <a href="https://sociostory.org/"><Typography style={{padding : 20}}><LanguageIcon /> www.sociostory.org</Typography></a>
            <Typography style={{padding : 20}}><MailOutlineIcon /> manoj@sociostory.in</Typography>
            <Typography style={{padding : 20}}><PhoneOutlinedIcon /> +91 8447012571</Typography>
            <Typography style={{padding : 20}}><LocationOnOutlinedIcon /> Amigo, First Floor, C-25, Noida Sector 8, Uttar Pradesh, India</Typography>
          </Grid>
          <Grid item xs={12} md={3} style={{justifyContent : 'center',textAlign : 'center'}} class="footertop">
            <Typography style={{fontWeight : 'bold',padding : 20}}>SocioStory</Typography>
            <a href="#about"><Typography style={{padding : 20}}>About Us</Typography></a>
            <a href="#past"><Typography style={{padding : 20}}>Past Events</Typography></a>
            <a href="#previous"><Typography style={{padding : 20}}>Previous Participants</Typography></a>
          </Grid>
          <Grid item xs={12} md={3} style={{textAlign : 'center'}} class="footertop">
         <Typography style={{fontWeight : 'bold',padding : 20}}>About Event</Typography>
         <a href="#event"><Typography style={{padding : 20}}>Event Details</Typography></a>
         <a href="#whyto"><Typography style={{padding : 20}}>Why Nominate</Typography></a>
         <a href="#nomination"><Typography style={{padding : 20}}>Areas to Nominate</Typography></a>
          </Grid>
        </Grid>
        <Grid className={classes.LowerFooter}>
          <Typography style={{ marginRight: 10 }}>Follow Us On</Typography>
          <a href="https://www.linkedin.com/company/socio-story" className={classes.FooterSocial}><span style={{color : 'white'}}><LinkedInIcon /></span></a>
          <a href="https://www.instagram.com/sociostoryofficial/" className={classes.FooterSocial}><span style={{color : 'white'}}><InstagramIcon /></span></a>
          <a href="https://www.facebook.com/SocioStoryOfficial" className={classes.FooterSocial}><span style={{color : 'white'}}><FacebookIcon /></span></a>
          <a href="https://twitter.com/SocioStory" className={classes.FooterSocial}><span style={{color : 'white'}}><TwitterIcon /></span></a>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(Home);