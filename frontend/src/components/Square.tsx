import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontWeight: 900,
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#D0D0D0",
      cursor: "pointer",
    },
  },
}));

interface ISquare {
  row: number;
  column: number;
  char: string;
  handleClick: (row: number, column: number) => void;
}

const Square: FC<ISquare> = ({ row, column, char, handleClick }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} onClick={() => handleClick(row, column)}>
      {char}
    </Paper>
  );
};

export default Square;
