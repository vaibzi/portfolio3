import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { ProfilesCard, CardWithPhoto, ContactCard } from "./Card";

import LinkedIn from "../img/Linkedin.png"

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
import { mainListItems } from "./listItems";





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
        background: 'linear-gradient(35deg, #2C4E80 10%, #2C4E80 95%)',
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
            background: 'linear-gradient(75deg, #2C4E80 10%, #2C4E80 95%)',
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
                            Top LinkedIn Posts
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

                        <IconButton onClick={toggleDrawer} color="info">

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

                        <Grid item xs={12} md={4} lg={4} mt={4} mb={2} mr={10} ml={10}>
                            <img alt="img not found" src={LinkedIn} width="25"
                            /><a href="https://www.linkedin.com/in/vaibyadav/" target="_blank" style={{ color: "white"}}> :Click to visit LinkedIn Profile</a>
                        </Grid>


                        {/* ROW 1  */}
                        <Grid container spacing={4}>

                            <Grid item xs={12} md={4} lg={4} mt={4} mb={2} mr={10} ml={10}>
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7190363592058101760" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                            </Grid>


                            <Grid item xs={12} md={4} lg={4} mt={4} mb={2} mr={10} ml={10} >
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7190363592058101760?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                            </Grid>



                        </Grid>


                        {/* ROW 2  */}
                        {/* <Grid container spacing={4}>

                            <Grid item xs={12} md={4} lg={4} mt={4} mb={2} mr={10} ml={10}>
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7158078022250549248" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                            </Grid>


                            <Grid item xs={12} md={4} lg={4} mt={4} mb={2} mr={10} ml={10}>
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7158078022250549248?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                            </Grid>



                        </Grid> */}


                        {/* ROW 3 */}
                        {/* <Grid container spacing={4}>

                            <Grid item xs={12} md={4} lg={4} mt={4} mb={2} mr={10} ml={10}>
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7180621881190891521" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                            </Grid>


                            <Grid item xs={12} md={4} lg={4} mt={4} mb={2} mr={10} ml={10}>
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7159819648580915200" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                            </Grid>



                        </Grid> */}
                        {/* ROW 4*/}
                        {/* <Grid container spacing={4}>

                            <Grid item xs={12} md={4} lg={4} mt={4} mb={2} mr={10} ml={10}>
                            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7179746110003974144" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                            </Grid>


                            <Grid item xs={12} md={4} lg={4} mt={4} mb={2} mr={10} ml={10}>
                                
                            </Grid>



                        </Grid> */}
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
