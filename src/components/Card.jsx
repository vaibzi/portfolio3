import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import { ProfilesListItems, ContactListItems, WebDevSkillsItems, ProgrammingSkillsItems, CoreSkillsItems, AISkillsItems } from './listItems';

import { pink, cyan } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary: pink,
      secondary: cyan,
    },
  });

export function CardWithPhoto(props) { 
  return (
    <ThemeProvider theme={theme}>
    
    <Card sx={{ /*maxWidth: 345,*/ backgroundColor:"#373737",
        "@keyframes width-increase2": {
            "0%": {
                // opacity: "0"
                transform: "scale(0.4) rotate(5deg) translateX(-20%) translateY(10%)",
                opacity: "0"
              },
            "100%" : {
                // opacity: "100"
                transform: "scale(1) rotate(0deg) translateX(0%) translateY(0%)",
                opacity: "1"
            }
        },
        animation :  "width-increase2 2s ease ",
        
          
     }} >
      <CardMedia
        // component="img"
        // alt="image did not load"
        sx={{ height: 240, }}
        image= {props.img}
        title={props.title}
        backgroundColor="primary"
      />
      <CardContent >
      
        <Typography gutterBottom variant="h5" component="div" color="white">
          {props.heading}
          
        </Typography>
        <Typography variant="body2" color="#c5c7c8">
          {props.description}
        </Typography>
        <Typography variant="body2" color="#c5c7c8">
          {props.description2}
        </Typography>
        <Typography variant="body2" color="#c5c7c8">
          {props.description3}
        </Typography>
        <Typography variant="body2" color={props.skillscolor}>
          {props.description4}
        </Typography>
      </CardContent>

      <CardActions>
      
      <Button color="secondary" href={props.link} target="_blank">{props.button1}</Button>
        {/* <Button size="small">{props.button2}</Button> */}
      </CardActions>
    </Card>
      </ThemeProvider>
  );
}


export function ProfilesCard() {
  return (
    <Card sx={{ minWidth: 275 , backgroundColor: "#FF2E63"}}>
      <CardContent>
      <List component="nav">
            {ProfilesListItems}
            <Divider color='white' sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
      </CardContent>
      
    </Card>
  );
}
export  function ContactCard() {
  return (
    <Card sx={{ minWidth: 275 , backgroundColor: "#252A34"}}>
      <CardContent>
      <List component="nav">
            {ContactListItems}
            <Divider color='white' sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
      </CardContent>
      
    </Card>
  );
}

export function AISkillsCard() {
  return (
    <Card sx={{ minWidth: 275 , backgroundColor: "#323232",
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
    
    }}>
      <CardContent>
      <List component="nav">
            {AISkillsItems}
            {/* <Divider color='white' sx={{ my: 1 }} /> */}
            {/* {secondaryListItems} */}
          </List>
      </CardContent>
    </Card>
  );
}

export function WebDevSkillsCard() {
  return (
    <Card sx={{ minWidth: 275 , backgroundColor: "#323232",
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
    
    }}>
      <CardContent>
      <List component="nav">
            {WebDevSkillsItems}
            {/* <Divider color='white' sx={{ my: 1 }} /> */}
            {/* {secondaryListItems} */}
          </List>
      </CardContent>
    </Card>
  );
}

export function ProgrammingSkillsCard() {
  return (
    <Card sx={{ minWidth: 275 , backgroundColor: "#323232"}}>
      <CardContent>
      <List component="nav">
            {ProgrammingSkillsItems}
            {/* <Divider color='white' sx={{ my: 1 }} /> */}
            {/* {secondaryListItems} */}
          </List>
      </CardContent>
    </Card>
  );
}

export function CoreSkillsCard() {
  return (
    <Card sx={{ minWidth: 275 , backgroundColor: "#323232"}}>
      <CardContent>
      <List component="nav">
            {CoreSkillsItems}
            {/* <Divider color='white' sx={{ my: 1 }} /> */}
            {/* {secondaryListItems} */}
          </List>
      </CardContent>
    </Card>
  );
}

