// import * as React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import React from 'react';
import Button from '@mui/material/Button';
import confettiIcon from "../img/party.png"
import { pink, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary: pink,
      secondary: purple,
    },
  });

function Confetti() {

  const [isLargeExploding, setIsLargeExploding] = React.useState(false);

  return (
    <div className="app" 
    style= {{
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
            
          }}
      >

      <ThemeProvider theme={theme}>
      <Button  variant="outlined" color="primary" onClick={() => setIsLargeExploding(!isLargeExploding)}>
        <img alt="not found" src={confettiIcon} width="50px" 
          
        /> {isLargeExploding && <ConfettiExplosion  />}Celebrate Your Achievements
      </Button>
      </ThemeProvider>
    </div>
  );
}

export default Confetti;