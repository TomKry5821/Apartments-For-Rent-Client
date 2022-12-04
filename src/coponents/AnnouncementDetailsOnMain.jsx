import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import * as React from "react";

const AnnouncementDetailsOnMain = function () {
  function createData(key, value) {
    return { key, value };
  }
  const rows1 = [
    createData("Województwo", "Śląskie"),
    createData("Miasto", "Gliwice"),
    createData("Cena", "102901"),
    createData("Liczba pokoi", "3"),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableBody>
          {rows1.map((row) => (
            <TableRow key={row.key}>
              <TableCell scope="row">{row.key}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnnouncementDetailsOnMain;
