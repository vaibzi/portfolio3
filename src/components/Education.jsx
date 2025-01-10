import * as React from "react";
// import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Title from "./Title";

import Mary from "../img/Mary.png";
import Nsut from "../img/Nsut.png";


// Generate Order Data
function createData(id, year, name, degree, grade) {
  return { id, year, name, degree, grade };
}

const rows = [
  createData(
    0,
    "2021-2025",
    <i>
    <img alt="not found" src={Nsut} width="35"  
    />     Netaji Subhas University of Technology (NSUT), New Delhi
    </i>,
    "B.tech in Computer Science Engineering (Data Science)",
    8.16,
  ),
  createData(
    1,
    "2020",
    <i>
    <img alt="not found" src={Mary} width="35"  
    />     St. Mary's School, Dwarka, New Delhi 
    </i>,
    "CBSE, Class XII",
    95
  ),
  createData(
    2,
    "2018",
    <i>
    <img alt="not found" src={Mary} width="35"  
    />     St. Mary's School, Dwarka, New Delhi 
    </i>,
    "CBSE, Class X",
    91.2,
  ),
  
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Education() {
  return (
    <React.Fragment>
      <h1 style={{ color: 'black' }}>Education</h1>
      <Table size="small" >
        <TableHead >
          <TableRow >
            <TableCell style={{ color: 'black', fontWeight: 'bolder' }}>Year</TableCell>
            <TableCell style={{ color: 'black', fontWeight: 'bolder' }} >Institute Name</TableCell>
            <TableCell style={{ color: 'black', fontWeight: 'bolder' }} >Course Specification</TableCell>
            <TableCell style={{ color: 'black', fontWeight: 'bolder' }} >Grade</TableCell>
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
              <TableCell style={{ color: 'white' }}>{row.degree}</TableCell>
              <TableCell style={{ color: 'white' }}>{row.grade}</TableCell>
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
