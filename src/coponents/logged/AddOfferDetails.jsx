import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import * as React from "react";

const AddOfferDetails = function () {
  function createData(key, value) {
    return { key, value };
  }
  const rows1 = [
    createData("Województwo", ""),
    createData("Miasto", ""),
    createData("Kod pocztowy", ""),
    createData("Ulica", ""),
    createData("Numer budynku", ""),
    createData("Numer lokalu", ""),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableBody>
          {rows1.map((row) => (
            <TableRow key={row.key}>
              <TableCell scope="row">{row.key}</TableCell>
              <TableCell align="right">
                <TextField />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AddOfferDetails;
