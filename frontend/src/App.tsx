import React, { FC, useState } from "react";
import { CssBaseline, Container, Typography } from "@material-ui/core";
import Rows from "./components/Rows";
import { getData } from "./api/api";

const INITIAL_DATA = {
  rows: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  msg: "",
};

const App: FC = () => {
  const [data, setData] = useState({ ...INITIAL_DATA });

  const handleClick = async (row: number, column: number) => {
    const newRows = [...data.rows];
    if (newRows[row][column] === "") {
      newRows[row][column] = "x";
      const responseData = await getData(newRows);
      setData((tempData) => ({
        ...tempData,
        rows: responseData.data,
        msg: responseData.status,
      }));
    } else {
      setData((tempData) => ({
        ...tempData,
        msg: "Invalid move. You click wrong square !",
      }));
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Rows rows={data.rows} handleClick={handleClick} />
        <Typography variant="h5" component="h5">
          {data.msg}
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default App;
