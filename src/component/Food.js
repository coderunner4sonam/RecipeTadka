import React, { useState, useEffect, useContext } from "react";
import FoodItem from "./FoodItem";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import { globalState } from "../Context";

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
  const { text, setText } = useContext(globalState); //searching recipes
  const [recipe, setRecipe] = useState([]);
  const [alert, setAlert] = useState("");

//   if (!text) setText("samosa");

  const APP_ID = "4daa0b40";
  const APP_KEY = "71da2f2c75bc3e6fb58a849c78afe20c";

  const url = `https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  let getData = async () => {
    if (text !== "") {
      let result = await axios.get(url);
      let dt = await result.data;
      console.log(dt);
      if (!dt.more) {
        return setAlert("No Food with such name");
      }
      // console.log(dt.hits); // different types
      setRecipe(dt.hits);
      setAlert("");
      setText("");
    } else {
      setAlert("Please Fill Form");
    }
    // console.log(dt.hits); // different types
  };
console.log(text)   

  useEffect(() => {
    getData();
  }, [text]);
  
  return (
    <>
      <div style={CoinStyle}>
        {recipe.slice((page - 1) * 6, page * 6).map((ele, id) => {
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


