import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from '@mui/material/Paper';
import {useContext} from "react"
import { globalState } from "../Context";
import AliceCarousel from "react-alice-carousel";

import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
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
  const classes = useStyles();
  const {text,setText}=useContext(globalState); 

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>

            <Typography variant="h6" className={classes.title}>
              Recipes Tadka
            </Typography>

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search A Recipe"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e)=>setText(e.target.value)}
            
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>

          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Headers;