import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { globalState } from "../Context";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "lightgreen",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "35px",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Headers = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { text, setText } = useContext(globalState);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
    
              <Typography variant="h6" className={classes.title} onClick={()=>{navigate('/')}}>
                  Recipes Tadka
                  
              </Typography>
          
              <Button
                onClick={onsubmit}
                variant="outlined"
                style={{
                  width: 85,
                  height: 45,
                  color: "lightgreen",
                  border: "0.2px solid grey",
                }}
              >
                Login
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
  
    </>
  );
};

export default Headers;
