import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import { mainListItems} from "./listItems";

import { SimpleBarChart, WebDevLineChart, ProgrammingLineChart, CoreLineChart, ProgBarChart, AILineChart, AIBarChart } from "./Charts";
import { WebDevSkillsCard, ProgrammingSkillsCard, CoreSkillsCard, AISkillsCard } from "./Card";
import Certificates from "./Certificates";

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
      <Link color="inherit" href="https://mui.com/">
        Vaibhav Yadav
      </Link>{" "}
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
    background: 'linear-gradient(45deg, #5D3587 20%, #FE6B8B 90%)',
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
      background: 'linear-gradient(45deg, #FE6B8B 10%, #5D3587 80%)',
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
  
});

export default function Skills() {
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
              Skills & Certifications
            </Typography>


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

            <IconButton onClick={toggleDrawer} color="secondary">
              
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


            {/* First Row  */}
            <Grid item xs={12} md={8} lg={5} mt={4} mb={2}>
                <AISkillsCard />
              </Grid>


              <Grid item xs={12} md={4} lg={7} mt={2} mb={7} >
              <AILineChart />
              <AIBarChart />
              </Grid>
              
              {/* Second Row  */}
              {/* Chart */}
              
              <Grid item xs={12} md={8} lg={5} mt={4} mb={2}>
                <WebDevSkillsCard />
              </Grid>


              <Grid item xs={12} md={4} lg={7} mt={2} mb={7} >
              <WebDevLineChart />
              <SimpleBarChart />
              </Grid>
              


                {/* Third ROW  */}


                <Grid item xs={12} md={8} lg={5} mt={4} mb={2}>
                <ProgrammingSkillsCard />
                </Grid>

                
                <Grid item xs={12} md={4} lg={7} mt={0} mb={7} >
                <ProgrammingLineChart />
                <ProgBarChart />  

                </Grid>


            {/* fouth ROW  */}
                <Grid item xs={12} md={8} lg={5} mt={4} mb={2}>
                <CoreSkillsCard />
                </Grid>

                <Grid item xs={12} md={4} lg={7} mt={0} mb={7} >
                <CoreLineChart />  
                </Grid>

            {/* FIFTH  */}
            <Grid item xs={12} md={4} lg={12} mt={10} mb={7} >
                <Certificates />  
                </Grid>
              
            </Grid>


            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
