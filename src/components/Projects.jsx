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
// import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "./listItems";
import { CardWithPhoto } from "./Card";

// PHOTOS 
import Legilimens from "../img/Legilimens.png"
import Efficienti from "../img/Efficienti.png"
import Webdeck from "../img/Webdeck.png"
import Respiratory from "../img/esp32photo.png"
import AdaptYog from "../img/AdaptYog.png"
import Dexter2 from "../img/Dexter2.png"
import Walmart from "../img/Walmart.png"
import PowerBi from "../img/PowerBi.png"




import Gourfood from "../img/Gourfood.png"
import StartupPrediction from "../img/StartupPrediction.png"

// import Legilimens from "../img/Legilimens.png"






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
    background: 'linear-gradient(35deg, #176B87 10%, #7FE9DE 80%)',
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
      background: 'linear-gradient(35deg, #7FE9DE 10%, #176B87 90%)',
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

export default function Projects() {
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
              Projects
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

            <IconButton onClick={toggleDrawer} color="primary">

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
            <Grid container spacing={4}>
              {/* Chart */}
              {/* FIRST ROW  */}

              <Grid item xs={12} md={4} lg={4} mt={4} mb={2} >
                <CardWithPhoto
                  img={AdaptYog}
                  title="Adapt Yog"
                  heading="Adapt Yog"
                  description="Ai Yoga Coach for people with Physical Limitations  "
                  description2=". "
                  description3="Jan - Apr 2024 : Yoga Pose Correction (Chair Yoga) | Novel Dataset "
                  description4="Classification Model (Python), Movenet, Deep Learning, React.js"
                  skillscolor="#F11A7B"
                  button1="LINK"
                  link="https://adapt-yog.vercel.app/"
                />
              </Grid>

              <Grid item xs={12} md={4} lg={4} mt={4} mb={2} >
                <CardWithPhoto
                  img={Dexter2}
                  title="Dexter"
                  heading="Dexter"
                  description="Broswer Extension to deteck Dark Patterns & Ai Generated Reviews"
                  description2=". "
                  description3="Feb - May 2024 : Web Scrapper | Dark Pattern Detection"
                  description4="Roberta, T5, XLNet, Bert (backend) | HTML, CSS, JS(frontend)"
                  skillscolor="#7E30E1"
                  button1="LINK"
                  link="https://www.linkedin.com/feed/update/urn:li:activity:7192218655215046656/"
                />
              </Grid>

              <Grid item xs={12} md={8} lg={4} mt={4} mb={2} >
                <CardWithPhoto
                  img={Respiratory}
                  title="Respiratory-Health-Analysis-using-TinyML-on-ESP32"
                  heading="Respiratory-Health-Analysis"
                  description="using-TinyML-on-ESP32"
                  description2="."
                  description3="Jan 2024: Classifying Respiratory Audio using 1D CNN on ESP32 (Micro Controller) & Mic connected through ArduinoIDE (frontend) "
                  description4="TF-Lite, C++, ESP32, Arduino"
                  skillscolor="#86eb34"
                  button1="LINK"
                  link="https://github.com/vaibzi/Respiratory-Health-Analysis-using-TinyML-on-ESP32"

                />
              </Grid>

              {/* Second Row  */}
              <Grid item xs={12} md={8} lg={4} mt={4} mb={2}>
                <CardWithPhoto
                  img={Walmart}
                  title="Walmart Sales Prediction"
                  heading="Walmart Sales Prediction"
                  description="Data Visualization and Linear Regression using R Shiny"
                  description2=". "
                  description3="Feb 2024 : Graphs, Charts for Walmart Data, Sales Predictor using Machine Learning "
                  description4="R, Shiny, Linear Regression"
                  skillscolor="#D0F288"
                  button1="LINK"
                  link="https://vaibz.shinyapps.io/walmart/"
                />
              </Grid>
              <Grid item xs={12} md={8} lg={4} mt={4} mb={2} >
                <CardWithPhoto
                  img={Legilimens}
                  title="Legilimens"
                  heading="Legilimens"
                  description="A Psychology Blogging Website"
                  description2=". "
                  description3="Jul, 2022 - Oct, 2022 : Community Portal, Topic Wise content, Animations, Responsive, Dark Mode"
                  description4="Node.js, Express.js, MongoDB, JavaScipt, CSS, HTML"
                  skillscolor="#7E30E1"
                  button1="LINK"
                  link="https://legilimency-backend-try2.onrender.com/"

                />
              </Grid>

              

              <Grid item xs={12} md={8} lg={4} mt={4} mb={2}>
                <CardWithPhoto
                  img={StartupPrediction}
                  title="Startup Success Prediction"
                  heading="Startup Success Prediction"
                  description="Machine Leaning Project | Random Forest | Decision Tree | Data Preprocessing"
                  description2=". "
                  description3="Oct 2023 : Predicts Success chances of a startup based on given inputs based on the training dataset, ML Algos."
                  description4="Python Pandas, Numpy, Gradio Library (Frontend), Machine Learning Models"
                  skillscolor="#78D6C6"
                  button1="LINK"
                  link="https://github.com/vaibzi/Startup-Success-Prediction"
                />
              </Grid>

{/* Third row  */}
             

              <Grid item xs={12} md={8} lg={4} mt={4} mb={2}>
                <CardWithPhoto
                  img={PowerBi}
                  title="Engineering Graduate Salary Prediction Data Visualization"
                  heading="Engineering Graduate Salary Prediction Data Visualization"
                  description="Power Bi | Data Analytics"
                  description2=". "
                  description3="Mar 2024 : Data Analytics through powerful & interactible charts/graphs in Power Bi"
                  description4="Microsoft Power Bi"
                  skillscolor="#78D6C6"
                  button1="LINK"
                  link="https://app.powerbi.com/groups/me/reports/cbc57c40-5a82-4ad8-a8d5-e12a442dac92/ReportSection?experience=power-bi"
                />
              </Grid>

            
              <Grid item xs={12} md={4} lg={4} mt={4} mb={2} >
                <CardWithPhoto
                  img={Webdeck}
                  title="Webdeck"
                  heading="WebDeck"
                  description="Diversity Platform | Hackathon Project, NSUT, New Delhi"
                  description2=". "
                  description3="Feb 2023 : Community Portal, MentorHub, Animations, Education, "
                  description4="Node.js, Express.js, MongoDB, JavaScipt, CSS, HTML"
                  skillscolor="#F11A7B"
                  button1="LINK"
                  link="https://webdeck-j9wj.onrender.com/"
                />
              </Grid>

              <Grid item xs={12} md={8} lg={4} mt={4} mb={2}>
                <CardWithPhoto
                  img={Gourfood}
                  title="Gourfood"
                  heading="Gourfood"
                  description="Restaurant Website"
                  description2=". "
                  description3="Dec 2022 : Responsive, Dark Mode, SIGN In/ OUT, Reviews, Maps, Animations "
                  description4="Node.js, Express.js, MongoDB, JavaScipt, CSS, HTML"
                  skillscolor="#D0F288"
                  button1="LINK"
                  link="https://gourfoodz.onrender.com/"
                />
              </Grid>

              {/* Fourth row  */}
              <Grid item xs={12} md={4} lg={4} mt={4} mb={2}>
                <CardWithPhoto
                  img={Efficienti}
                  title="Efficienti"
                  heading="Efficienti"
                  description="Productivity Portal | Hackathon Project, NIT Agartala"
                  description2=". "
                  description3="Jun 2023 : Responsive , Productivity Analysis based on Innovative factors, Company- Employee Deadline Analysis , Animations"
                  description4="Bootstrap, JavaScipt, CSS, HTML"
                  skillscolor="#A9B388"
                  button1="LINK"
                  link="https://efficientifrontend.vanshagg2003.repl.co/"
                />
              </Grid>

            </Grid>


            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
