import React, {  useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import {
  Container,
  createTheme,
  ThemeProvider,
  TextField,
} from "@material-ui/core";

export default function SearchBar() {

  const [search, setSearch] = useState();

  const useStyles = makeStyles({
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "gold",
      },
    },
  });

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handlechange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <br />
        <br />
        <TextField
          label="Search For Food Recipe.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={handlechange}
        />

        <Button
          variant="contained"
          style={{
            width: 85,
            height: 39,
            marginLeft: 15,
            backgroundColor: "darkgreen",
          }}
        >
          Search
        </Button>
        <br />
      </Container>
    </ThemeProvider>
  );
}
