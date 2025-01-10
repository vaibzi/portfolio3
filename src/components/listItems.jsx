import * as React from "react";
import { BlogIcon, DocIcon, MailIcon, ProfileIcon, SkillsIcon } from "./Icons"

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Gmail from "../img/gmail.png"
import LinkedIn from "../img/Linkedin.png"
import Leetcode from "../img/leetcode.png"
import Github from "../img/github.png"
import GfG from "../img/Gfg.png"

import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

// IMAGES 
import Regression from "../img/Regression.png"
import Classification from "../img/Classification.png"
import CNN from "../img/CNN.png"



import OperatingSystems from "../img/OperatingSystem.png"
import DBMS from "../img/DBMS.png"
import ReactIcon from "../img/ReactIcon.png"
import NodeIcon from "../img/NodeIcon.png"
import ExpressIcon from "../img/ExpressIcon.png"
import MongoIcon from "../img/MongoIcon.png"
import CSS from "../img/CSS.png"
import HTML from "../img/HTML.png"
import JavaScript from "../img/JavaScript.png"
import EthicalHacking from "../img/EthicalHacking.png"
import CPP from "../img/CPP.png"
import C from "../img/C.png"
import Python from "../img/Python.png"
import Java from "../img/Java.png"
import Nptel from "../img/Nptel.png"
import SQL from "../img/SQL.png"
import Compiler from "../img/Compiler.png"
import Multimedia from "../img/Multimedia.png"
import Algo from "../img/Algo.png"
import DataStructure from "../img/DataStructure.jpg"
import BigData from "../img/BigData.png"
import Bootstrap from "../img/Bootstrap.png"
import LinkedinIcon from "../img/LinkedinIcon.png"


import tinyml from "../img/tinyml.jpg"
import R from "../img/R.png"
import next from "../img/next.png"










export const mainListItems = (
  <React.Fragment>

    
      
      <ListItemButton>
      <Link to='/' style={{textDecoration: "none", color: "white"}}>
      <ListItemIcon>
      <i style={{ color: 'azure'}}>
        <ProfileIcon height='auto' width='1.5em'/>
      </i>
      </ListItemIcon>
        Profile</Link>
    </ListItemButton>

    
    <ListItemButton>
      
      <Link to='/projects' style={{textDecoration: "none", color: "white"}}>
      <ListItemIcon>
      <i style={{ color: 'darkturquoise'}}>
        <DocIcon height='auto' width='1.4em'/>
      </i>
      </ListItemIcon>Projects</Link>
    </ListItemButton>
    

    <ListItemButton>
      
      <Link to='/skills' style={{textDecoration: "none", color: "white"}}>
      <ListItemIcon>
      <i style={{ color: 'gold'}}>
        <SkillsIcon height='auto' width='1.6em'/>
      </i>
      </ListItemIcon>Skills & Certificates</Link>

    </ListItemButton>

    <ListItemButton>
    <Link to='/linkedin' style={{textDecoration: "none", color: "white"}}>
      <ListItemIcon>
      <img alt="img not found" src={LinkedinIcon} width="25" 
    />
      </ListItemIcon>LinkedIn Posts</Link>

    </ListItemButton>

    <ListItemButton>
    <Link to='' style={{textDecoration: "none", color: "white"}}>
      <ListItemIcon>
      <i style={{ color: 'yellowgreen'}}>
        <BlogIcon height='auto' width='1.6em'/>
      </i>
      </ListItemIcon>Blogs</Link>

    </ListItemButton>


    <ListItemButton>
      <Link to='/' style={{textDecoration: "none", color: "white"}}>
      <ListItemIcon>
      <i style={{ color: 'deeppink'}}>
        <MailIcon height='auto' width='1.8em'/>
      </i>
      </ListItemIcon>
        Contact</Link>
    </ListItemButton>

  </React.Fragment>
);

export const SkillsListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);

export const ProfilesListItems = (

    <React.Fragment>
    <h2 style={{color: "white"}}> Profiles </h2>
    <ListItemButton>
    <img alt="img not found" src={LinkedIn} width="25" 
    /><a href="https://www.linkedin.com/in/vaibyadav/" target="_blank" style={{ color:"white", textDecoration: "none"}} > : linkedin.com/in/vaibyadav</a>
    </ListItemButton>
    
    <ListItemButton>
    <img alt="img not found" src={Leetcode} width="25"  
    /><a href="https://leetcode.com/vaib_dev/" target="_blank" style={{color:"white", textDecoration: "none"}} >  :   https://leetcode.com/vaib_dev/</a>
    </ListItemButton>

    <ListItemButton>
    <img alt="img not found" src={Github} width="25"  
    /><a href="https://github.com/vaibzi?tab=repositories" target="_blank" style={{color:"white", textDecoration: "none"}} >  :   https://github.com/vaibzi/</a>
    </ListItemButton>

    <ListItemButton>
    <img alt="img not found" src={GfG} width="25"  
    /><a href="https://auth.geeksforgeeks.org/user/vaib_dev" target="_blank" style={{color:"white", textDecoration: "none"}} >  :   geeksforgeeks.org/user/vaib_dev</a>
    </ListItemButton>
  </React.Fragment>
);

export const ContactListItems = (
  <React.Fragment>
    <h2 style={{color: "white"}}> Contact </h2>
    <ListItemButton>
    <img alt="img not found" src={Gmail} width="30" 
    /><a href="mailto:email@vaibz.work@gmail.com" target="_blank" style={{ color:"white"}}> : vaibz.work@gmail.com</a>
    </ListItemButton>
    
    <ListItemButton>
    <img alt="img not found" src={LinkedIn} width="25"  
    /><a href="https://www.linkedin.com/in/vaibyadav/" target="_blank" style={{color:"white"}}>  :   linkedin.com/in/vaibyadav/</a>
    </ListItemButton>
  </React.Fragment>
);

export const AISkillsItems = (

  <React.Fragment>
  <h2 style={{color: "#9575DE"}}> AI-ML Skills </h2>
  <ListItemButton>
  <img alt="img not found" src={Regression} width="25" 
  /><a  style={{ color:"white", textDecoration: "none"}} > : Regression - Linear, Decision Trees, Random Forest, SVM</a>
  </ListItemButton>
  <ListItemButton>
  <img alt="img not found" src={Classification} width="25" 
  /><a  style={{ color:"white", textDecoration: "none"}} > : Classification - Image, Video, Audio</a>
  </ListItemButton>
  
  <ListItemButton>
  <img alt="img not found" src={CNN} width="45"  
  /><a style={{color:"white", textDecoration: "none"}} >  :  CNN </a>
  </ListItemButton>

</React.Fragment>
);


export const WebDevSkillsItems = (

  <React.Fragment>
  <h2 style={{color: "#A1DD70"}}> Web Development Skills </h2>
  <ListItemButton>
  <img alt="img not found" src={next} width="25" 
  /><a  style={{ color:"white", textDecoration: "none"}} > : Next.js</a>
  </ListItemButton>
  <ListItemButton>
  <img alt="img not found" src={ReactIcon} width="25" 
  /><a  style={{ color:"white", textDecoration: "none"}} > : React.js, Redux</a>
  </ListItemButton>
  
  <ListItemButton>
  <img alt="img not found" src={NodeIcon} width="45"  
  /><a style={{color:"white", textDecoration: "none"}} >  :   Node.js</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={ExpressIcon} width="35"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   Express.js</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={MongoIcon} width="35"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   MongoDB</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={SQL} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   SQL</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={JavaScript} width="30"  
  /><a  style={{color:"white", textDecoration: "none"}} >  : JavaScript</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={CSS} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  : CSS, Tailwind CSS</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={HTML} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  : HTML</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={Bootstrap} width="25"  
  /><a style={{color:"white", textDecoration: "none"}} >  : Bootstrap</a>
  </ListItemButton>
</React.Fragment>
);

export const ProgrammingSkillsItems = (

  <React.Fragment>
  <h2 style={{color: "#B0A695"}}> Programming Skills </h2>
  <ListItemButton>
  <img alt="img not found" src={CPP} width="25" 
  /><a style={{ color:"white", textDecoration: "none"}} > : C++</a>
  </ListItemButton>
  
  <ListItemButton>
  <img alt="img not found" src={C} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :  C</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={Python} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   Python</a>
  </ListItemButton>
  <ListItemButton>
  <img alt="img not found" src={R} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   R</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={Java} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :  Java</a>
  </ListItemButton>
</React.Fragment>
);

export const CoreSkillsItems = (

  <React.Fragment>
  <h2 style={{color: "#FB2576"}}> Core Skills </h2>
  <ListItemButton>
  <img alt="img not found" src={OperatingSystems} width="25" 
  /><a  style={{ color:"white", textDecoration: "none"}} >: Operating Systems</a>
  </ListItemButton>
  
  <ListItemButton>
  <img alt="img not found" src={DBMS} width="25"  
  /><a style={{color:"white", textDecoration: "none"}} >:  Database Management Systems</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={DataStructure} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   Data Structures</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={Algo} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   Algorithms</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={BigData} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   Big Data Analytics</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={Compiler} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   Compiler</a>
  </ListItemButton>

  <ListItemButton>
  <img alt="img not found" src={Multimedia} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   Multimedia / Video Analytics</a>
  </ListItemButton>

  {/* <ListItemButton>
  <img alt="img not found" src={tinyml} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   TinyML</a>
  </ListItemButton> */}

  <ListItemButton>
  <img alt="img not found" src={EthicalHacking} width="25"  
  /><a  style={{color:"white", textDecoration: "none"}} >  :   Ethical Hacking</a>
  </ListItemButton>
</React.Fragment>
);
