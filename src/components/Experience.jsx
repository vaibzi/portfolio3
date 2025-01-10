import * as React from "react";
// import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// import { BlogIcon, DocIcon, MailIcon, ProfileIcon } from "./Icons"
// import ListItemIcon from "@mui/material/ListItemIcon";

import dunn from '../img/dunn.png';
import nsit from '../img/Nsut.png';



// Generate Order Data
function createData(id, year, name, post, ) {
  return { id, year, name, post,  };
}


const rows = [
  createData(
    0,
    "Jan 2025",
    <i>
    <img alt="not found" src={dunn} width="25"  
    />     Dunnhumby
    </i>,
    "Software Engineering Intern (Tesco Retail & Media)",
  ),
  createData(
    1,
    "May 2024 - Jan 2025",
    <i>
    <img alt="not found" src={nsit} width="25"  
    />     Training and Placement Cell, NSUT
    </i>,
    "Placement Coordinator",
  )
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Experience() {
  return (
    <React.Fragment>
      <h1 style={{ color: 'black' }}>Experience</h1>
      <Table size="small" >
        <TableHead >
          <TableRow >
            <TableCell style={{ color: 'black', fontWeight: 'bolder' }}>Year</TableCell>
            <TableCell style={{ color: 'black', fontWeight: 'bolder' }} >Organization</TableCell>
            <TableCell style={{ color: 'black', fontWeight: 'bolder' }} >Role</TableCell>
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
              <TableCell style={{ color: 'white' }}>{row.projects}</TableCell>
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
