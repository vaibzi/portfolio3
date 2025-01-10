import * as React from "react";
// import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// import { BlogIcon, DocIcon, MailIcon, ProfileIcon } from "./Icons"
// import ListItemIcon from "@mui/material/ListItemIcon";

import Nptel from "../img/Nptel.png"
import Times from "../img/Times.png"
import nvidia from "../img/nvidia.jpg"
import SanDiego from "../img/SanDiego.png"
import Udemy from "../img/Udemy.png"




// Generate Order Data
function createData(id, year, name, link, ) {
  return { id, year, name, link,  };
}


const rows = [
  createData(
    0,
    "2024",
    <i>
    <img alt="not found" src={nvidia} width="25"  
    />     Nvidia DLI: Deep Learning Fundamentals
    </i>,
    <a href="https://courses.nvidia.com/certificates/27ad358961404357b6a3e46a39af8824/" target="_blank">View</a>
    
   
  ),
  createData(
    1,
    "2024",
    <i>
    <img alt="not found" src={SanDiego} width="25"  
    />     UC SanDiego : Internet of Things
    </i>,
    <a href="https://www.coursera.org/account/accomplishments/verify/M6X6927E83SW" target="_blank">View</a>
    
   
  ),
  createData(
    2,
    "2024",
    <i>
    <img alt="not found" src={Nptel} width="25"  
    />     Nptel : Introduction to Internet of Things 
    </i>,
    <a href="https://drive.google.com/file/d/1wbGpEmrTI51RuyLCW-moE_mtkq5njAQp/view?usp=sharing" target="_blank">View</a>
    
   
  ),
  createData(
    3,
    "2023",
    <i>
    <img alt="not found" src={Nptel} width="25"  
    />     Nptel : Programming in Java 
    </i>,
    <a href="https://drive.google.com/file/d/1MjqihGZPV1xnyUZlXddvziTyb1S6ZUG7/view?usp=sharing" target="_blank">View</a>
    
   
  ),
  createData(
    4,
    "2023",
    <i>
    <img alt="not found" src={Nptel} width="25"  
    />     Nptel : Ethical Hacking
    </i>,
    <a href="https://drive.google.com/file/d/1sbItrfha7Ssg05UEPsGlm8eGbwT5x0vP/view?usp=sharing" target="_blank">View</a>
  
    
    
  ),
  createData(
    5,
    "2023",
    <i>
    <img alt="not found" src={Udemy} width="25"  
    />    Udemy : Web Development Bootcamp by Angela Yu
    </i>,
    <a href="https://www.udemy.com/certificate/UC-0ac23cdf-5703-49e8-9f39-fa32e5b99490/" target="_blank">View</a>
  
    
    
  ),
  createData(
    6,
    "2018",
    <i>
    <img alt="not found" src={Times} width="25"  
    />     Times Group : Times Scholar Gold Certificate
    </i>,
    <a href="https://drive.google.com/file/d/1ZnUGZrRnszN-elr2btStZelGIpK8F6vC/view?usp=sharing" target="_blank">View</a>
  
    
    
  ),
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Certificates() {
  return (
    <React.Fragment>
      <h1 style={{ color: 'white' }}>Certificates</h1>
      <Table size="small" >
        <TableHead >
          <TableRow >
            <TableCell style={{ color: 'grey', fontWeight: 'bolder' }}>Year</TableCell>
            <TableCell style={{ color: 'grey', fontWeight: 'bolder' }} >Organization</TableCell>
            <TableCell style={{ color: 'grey', fontWeight: 'bolder' }} >Link</TableCell>
            </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell style={{
                   padding: '20px',
                    boxSizing: 'content-box',
                    color : 'white'
                }}>{row.year}</TableCell>

              <TableCell style={{ color: 'white' }}>{row.name}</TableCell>
              <TableCell style={{ color: 'white' }}>{row.post}</TableCell>
              <TableCell style={{ color: 'white' }}>{row.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
