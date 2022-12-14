import "./App.css";
import Headers from "./component/Headers";
import { makeStyles } from "@material-ui/core";
import Crousal from "./component/Crousal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./component/SearchBar";
import Food from "./component/Food";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Headers />
      <Crousal />
      <SearchBar/>
      <Food/>
      
    </div></BrowserRouter>
    
  );
}

export default App;
