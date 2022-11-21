import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import * as React from "react";

const Offer = function () {
  function createData(key, value) {
    return { key, value };
  }
  const rows1 = [
    createData("Województwo", "Śląskie"),
    createData("Miasto", "Gliwice"),
    createData("Cena", 101000),
    createData("Liczba pokoi", 5),
  ];
  // const rows2 = [
  //   createData("Województwo", "Mazowieckie"),
  //   createData("Miasto", "Warszawa"),
  //   createData("Cena", 250000),
  //   createData("Liczba pokoi", 3),
  // ];
  // const rows3 = [
  //   createData("Województwo", "Łódzkie"),
  //   createData("Miasto", "Łódź"),
  //   createData("Cena", 43000),
  //   createData("Liczba pokoi", 2),
  // ];
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

export default Offer;
