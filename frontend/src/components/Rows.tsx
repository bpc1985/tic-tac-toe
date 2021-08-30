import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Square from "./Square";

interface IRow {
  row: number;
  letters: string[];
  handleClick: (row: number, column: number) => void;
}

const Row: FC<IRow> = ({ row, letters, handleClick }) => {
  return (
    <>
      {letters.map((char, i) => (
        <Grid key={`r${row}c${i}`} item xs={3}>
          <Square row={row} column={i} char={char} handleClick={handleClick} />
        </Grid>
      ))}
    </>
  );
};

interface IRows {
  rows: string[][];
  handleClick: (row: number, column: number) => void;
}

const Rows: FC<IRows> = ({ rows, handleClick }) => {
  return (
    <Grid container spacing={1}>
      {rows.map((letters, index) => (
        <Grid key={`r${index}`} container item xs={9} spacing={1}>
          <Row row={index} letters={letters} handleClick={handleClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Rows;
