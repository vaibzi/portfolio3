import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import  { ProfilesCard,CardWithPhoto, ContactCard } from "./Card";

//PHOTOS
import DP from '../img/DP.png'
import Resume from '../img/Resume.png'
import ProjectLogo from '../img/ProjectsLogo.png'
import skillsPhoto from '../img/react.jpg'


import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";

//Different Components
import { mainListItems} from "./listItems";
import Education from "./Education";
import Experience from "./Experience";
import Confetti from "./Confetti";




// For Copyright at page bottom
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="white"
      align="center"
      {...props}
    >
      {"Copyright © "}
    
      {"Vaibhav Yadav"}
      {" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


//Sidemenu
const drawerWidth = 230;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({ //When cloed
  background: '#373737',

  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && { //When open
    background: 'linear-gradient(35deg, #EE4E4E 10%, #FE6B8B 95%)',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    background: '#373737',
    color: 'white',
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      background: 'linear-gradient(75deg, #EE4E4E 10%, #FE6B8B 95%)',
      color: 'white',
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  // palette: {
  //   mode: 'dark',
  // },
});

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton //Opens/Closes side menu when clicked
              edge="start"
              color="inherit"
              
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              {/* 3 horizontal lines  */}
              <MenuIcon /> 
            </IconButton>

              {/* Heading */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Profile
            </Typography>

              {/* Notifications Icon */}
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}

          </Toolbar>
        </AppBar>

            {/* Side Menu Begins */}
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >

            <IconButton onClick={toggleDrawer} color="error">
              
              <MenuIcon color='white' 
              />
            </IconButton>
            {/* Close Menu Button  */}

          </Toolbar>

          <Divider color='white' />

          <List component="nav">
            {mainListItems}
            <Divider color='white' sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
            {/* Side Menu ends */}

        <Box //Main Container, right side wala, that contains all boxes
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.grey[100]
                : " #191919 ",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, }}>
          {/* Parent  */}
            <Grid container spacing={3}> 
            

              {/* Chart */}
              <Grid item xs={12} md={8} lg={6} mt={5}>
              {/* Container 1, that contains chart  */}
                <Paper 
                  sx={{
                  "@keyframes width-increase": {
                    "0%": {
                        // opacity: "0"
                        transform: "scale(0.3) rotate(6deg) translateX(-30%) translateY(30%)",
                        opacity: "0"
                      },
                    "100%": {
                        // opacity: "100"
                        transform: "scale(1) rotate(0deg) translateX(0%) translateY(0%)",
                        opacity: "1"
                    }
                },
                animation:  "width-increase 2s ease ",
                
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#373738",
                    // height: 240,
                  }}

                >
                <Experience />
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3} mt={5} >
              
                <CardWithPhoto 
                  img={skillsPhoto}
                  title="skillsphoto"
                  heading=""
                  description=""
                  description2=""
                  description3=""
                  description4=""
                  
                  
                  button1="View All Skills & Certifications"
                  link="#/skills"
                />
                <br></br>
                <Confetti />
              </Grid>

              <Grid item xs={12} md={4} lg={3} mt={5} >
              
                <CardWithPhoto 
                  img={DP}
                  title="DP"
                  heading="Vaibhav Yadav"
                  description="DOB : 30/11/2001"
                  description2="Gender : Male"
                  description3="Nationality : Indian"
                  description4=""
                  
                  
                  button1=""
                />

                
              </Grid>




                {/* SECOND ROW  */}


                <Grid item xs={12} md={8} lg={9} mt={8}>
                <Paper
                  sx={{

                    "@keyframes width-increase": {
                    "0%": {
                        // opacity: "0"
                        transform: "scale(0.3) rotate(6deg) translateX(-30%) translateY(30%)",
                        opacity: "0"
                      },
                    "100%": {
                        // opacity: "100"
                        transform: "scale(1) rotate(0deg) translateX(0%) translateY(0%)",
                        opacity: "1"
                    }
                },
                animation:  "width-increase 2s ease ",  
            
          

                    mt:2,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#524C42"
                    // height: 240,
                  }}

                >
                <Education />
                </Paper>
                 

              </Grid>


              {/* RESUME */}
              <Grid item xs={12} md={4} lg={3} mt={10}>
                
                <CardWithPhoto 
                  img={Resume}
                  title="Resume"
                  heading="Tech Resume"
                  description=""
                  
                  button1="Download Resume"
                  link="https://docs.google.com/document/d/1OE1YfUMDRXnWM6MUjCFSihkmXNyxk7bxYDtCNeaTl_c/edit?usp=sharing"
                />
                
              </Grid>
              

              <Grid item xs={12} md={4} lg={4} mt={10} mb={10}>
              <ProfilesCard /> 
              </Grid>

              <Grid item xs={12} md={4} lg={4} mt={10} mb={10}>
                
                <CardWithPhoto 
                  img={ProjectLogo}
                  title="Resume"
                  heading="Projects"
                  description=""
                  
                  button1="See All Projects"
                  link="#/projects"
                />
                
              </Grid>

              <Grid item xs={12} md={4} lg={4} mt={10} mb={10} >
              <div id="contact"></div>
              <ContactCard />   
              </Grid>

              

              
            </Grid>


            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
