import React, { useContext, useEffect, useState} from "react";
import FoodItem from "./FoodItem";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Crousal from "./Crousal"
import {
  Container,
  createTheme,
  ThemeProvider,
  TextField,
} from "@material-ui/core";
import { globalState } from "../Context";
import Alert from "./Alert";

const CoinStyle = {
  maxWidth: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "2.5rem",
  padding: "1vmin",
  background: "black",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  placeItems: "center",
  overflow: "hidden",
  fontFamily: "poppins",
};

export default function Food() {
  const [page, setPage] = useState(1); // pagination
     let [query, setQuery] = useState("samosa");
    let [alert, setAlert] = useState("");
    const {recipe,setRecipe}=useContext(globalState);
   

    const APP_ID = "4daa0b40";
    const APP_KEY = "71da2f2c75bc3e6fb58a849c78afe20c";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    let getData = async () => {
      if (query !== "") {
        let result = await axios.get(url);
        let dt = await result.data;
        console.log(dt);
        if (!dt.more) {
          return setAlert("No Food with such name");
        }
        // console.log(dt.hits); // different types
        setRecipe(dt.hits);
        setAlert("");
        setQuery("");
       
      } else {
        setAlert("Please Fill with food name");
      }
    };
    console.log(query)
    // console.log(recipes);
    useEffect(()=>{
      getData()
    },[])

    const onsubmit = (e) => {
      e.preventDefault();
      getData();
    };

    const onchange = (e) => {
      e.preventDefault();
      setQuery(e.target.value);

    };

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
 
  return (
    <>
    <br/>
        <Crousal/>
      <ThemeProvider theme={darkTheme}>
        <Container style={{ textAlign: "center" }}>
          <br />
          <br />
          {alert !== "" && <Alert alert={alert} />}
          <TextField
            label="Search For Food Recipe.."
            variant="outlined"
            style={{ marginBottom: 20, width: "90%" }}
            onChange={onchange} 
          />

          <Button
            onClick={onsubmit}
            variant="outlined"
            style={{
              width: 85,
              height: 54,
              color:"white",
              border:"0.2px solid grey"
              
            }}
          >
            Search
          </Button>
           
          <br />
        </Container>
      </ThemeProvider>
      <div style={CoinStyle}>
        {recipe.slice((page - 1) * 6, page * 6).map((ele, id) => {  //array slice [0,1,2,3,4,5].map
          return <FoodItem ele={ele} key={id} />;
        })}
      </div>
      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "yellow",
          backgroundColor: "white",
        }}
        count={(recipe.length / 6).toFixed(0)}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 6);
        }}
      />
    </>
  );
}
